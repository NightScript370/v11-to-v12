module.exports = Structures.extend("GuildMember", GuildMember => class LazyV12GuildMember extends GuildMember {
    constructor(...args) {
        super(...args)
    }

    addRole (id, reason='') {
        return this.roles.add(id, reason);
    }

    addRoles (id, reason='') {
        return this.roles.add(id, reason);
    }

    removeRole (id, reason='') {
        return this.roles.remove(id, reason);
    }

    removeRoles (id, reason='') {
        return this.roles.remove(id, reason);
    }

    setRoles (id, reason='') {
        return this.roles.set(id, reason);
    }

    hasPermission (perm, _, checkAdmin=true, checkOwner=true) {
        return GuildMember.hasPermission(perm, {checkAdmin, checkOwner})
    }

    hasPermissions (perm, _) {
        return GuildMember.hasPermission(perm)
    }

    sendCode(lang, code, options={}) {
        return this.send("```" + lang + "\n" + code + "```", options);
    }

    sendEmbed(embed, messageContent="", options={}) {
        options.embed = embed;
        return this.send(messageContent, options);
    }

    sendMessage(messageContent="", options={}) {
        return this.send(messageContent, options);
    }

    setDeaf(deaf, reason="") {
        return this.voice.setDeaf(deaf, reason);
    }

    setMute(mute, reason="") {
        return this.voice.setMute(mute, reason);
    }
})
