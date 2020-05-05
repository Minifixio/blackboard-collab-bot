var pathologist = require('pathologist')
const svgPathProperties = require("svg-path-properties").svgPathProperties
var d3 = require('d3')
const path = require('path');

const fs = require("fs")
const util = require("util")
const writeFile = util.promisify(fs.writeFile)

const dirPath = '../../files/drawings'

// Function to get all the different paths of an SVG element
// I found this util function on https://github.com/spotify/coordinator/blob/ecce27a0a65bf52548ffb8ede2e4afd267d492e0/src/js/pathologize.js
function pathologize(original) {
    const reText = /<text[\s\S]*?<\/text>/g;
    const reStyle = /<style[\s\S]*?<\/style>/g;
    const removedText = original.replace(reText, '');
    const removedStyle = removedText.replace(reStyle, '');

    try {
        const pathologized = pathologist.transform(removedStyle);
        return pathologized;
    } catch (e)  {
        return original;
    }
}

// Get the path declared by the d="{path}" in the path string
function getPathCoords(original) {
    return original.split('"')[1].split('"')[0];
}

function getPointsArray(pathArray, accuracy) {

    let res = []

    let pathsProps = pathArray.map(path => {
        var props = new svgPathProperties(getPathCoords(path));
        return props
    })
    
    let maxLength = Math.max.apply(null, pathsProps.map(val => Math.round(val.getTotalLength())))
    
    pathsProps.forEach(path => {

        let numPoints = path.getTotalLength() * accuracy / maxLength

        res = res.concat(d3.range(numPoints).map(function(i){
            var point = path.getPointAtLength(path.getTotalLength() * i / numPoints);
            return [point.x, point.y];
        }));
    })

    return res
}

function writeJSON(data, name) {
    const output = JSON.stringify(data);
    writeFile(path.resolve(__dirname, `${dirPath}/path/${name}.json`), output, 'utf8').then(() => {
        console.log('file ' + name + ' has been added to the drawings library')
    }).catch(e => {
        console.log('error while converting ' + name + ' drawing file')
    });
}


module.exports.convert = function convert(name) {

    let svg = fs.readFileSync(path.resolve(__dirname, `${dirPath}/svg/${name}.svg`), 'utf8')

    let svgPaths = pathologize(svg)
    let data = getPointsArray(svgPaths.split('\n').slice(1, -1), 500)
    writeJSON(data, name)
}