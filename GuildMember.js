module.exports = Structures.extend("GuildMember", GuildMember => class LazyV12GuildMember extends GuildMember {
    constructor(...args) {
        super(...args)
    }

    addRole (id, reason) {
        return this.roles.add(id, reason);
    }

    addRoles (id, reason) {
        return this.roles.add(id, reason);
    }
})
