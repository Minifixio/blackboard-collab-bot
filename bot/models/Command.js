module.exports.Command = class Command {
    constructor(
        name,
        call,
        description,
        activated
    ) {
        this.name = name
        this.call = call
        this.description = description
        this.activated = activated
    }
}