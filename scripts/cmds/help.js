const { getPrefix } = global.utils;
const { commands, aliases } = global.GoatBot;

module.exports = {
  config: {
    name: "help",
    aliases: ["menu", "cmds", "cmdslist"],
    version: "2.5.1",
    author: "𝐓𝐀𝐇𝐀 𝐊𝐇𝐀𝐍",
    countDown: 3,
    role: 0,
    description: {
      en: "Ultra VIP Stylish Help Menu & Command Inspector",
      ur: "Khoobsurat aur VIP Command Menu System"
    },
    category: "system",
    guide: {
      en: "{pn} [command ka naam]"
    },
    priority: 1
  },

  onStart: async function ({ message, args, event, role, api }) {
    const { threadID, messageID } = event;
    const prefix = getPrefix(threadID);

    if (api.setMessageReaction) {
      api.setMessageReaction("⚡", messageID, () => {}, true);
    }

    // ──────────────────────────────────────────────────
    // 1. ALL COMMANDS MENU (MAIN INTERFACE)
    // ──────────────────────────────────────────────────
    if (args.length === 0) {
      const categories = {};

      for (const [name, value] of commands) {
        if (value.config.role > 0 && role < value.config.role) continue;
        
        const catName = (value.config.category || "GENERAL").toUpperCase();
        if (!categories[catName]) categories[catName] = [];
        if (!categories[catName].includes(name)) {
          categories[catName].push(name);
        }
      }

      let menu = `╔═════════════════════════╗\n`;
      menu += `║    ⚡ 𝗧𝗔𝗛𝗔 𝗕𝗢𝗧 ⚡    ║\n`;
      menu += `╠═════════════════════════╣\n`;
      menu += `║ 👑 𝗗𝗘𝗩𝗘𝗟𝗢𝗣𝗘𝗥 : 𝐓𝐀𝐇𝐀 𝐊𝐇𝐀𝐍\n`;
      menu += `║ ⚙️ 𝗙𝗥𝗔𝗠𝗘𝗪𝗢𝗥𝗞 : 𝗚𝗼𝗮𝘁𝗕𝗼𝘁 𝗩𝟮\n`;
      menu += `║ 📌 𝗣𝗥𝗘𝗙𝗜𝗫     : [ ${prefix} ]\n`;
      menu += `╚═════════════════════════╝\n\n`;

      // Category Blocks with Aesthetic Grid
      Object.keys(categories).sort().forEach((cat) => {
        menu += `┌─[ ❖ 𝗖𝗔𝗧𝗘𝗚𝗢𝗥𝗬: ${cat} ]\n`;
        const cmdsList = categories[cat].sort();
        
        for (let i = 0; i < cmdsList.length; i += 3) {
          const chunk = cmdsList.slice(i, i + 3).map(c => `✧ ${c}`);
          menu += `│ ${chunk.join("   ")}\n`;
        }
        menu += `└─────────────────────────►\n`;
      });

      const totalCmds = commands.size;
      menu += `\n╭─────────────────────────╮\n`;
      menu += `│ 📊 Total Commands : ${totalCmds}\n`;
      menu += `│ 💡 Usage : ${prefix}help <command>\n`;
      menu += `│ 👑 Owner : 𝐓𝐀𝐇𝐀 𝐊𝐇𝐀𝐍\n`;
      menu += `╰─────────────────────────╯`;

      try {
        const sentMsg = await message.reply(menu);
        if (sentMsg?.messageID) {
          setTimeout(() => message.unsend(sentMsg.messageID), 90000);
        }
      } catch (err) {
        console.error("[Help Menu Error]:", err);
      }
    } 
    // ──────────────────────────────────────────────────
    // 2. SINGLE COMMAND DETAILS CARD (.help <cmd>)
    // ──────────────────────────────────────────────────
    else {
      const cmdQuery = args[0].toLowerCase();
      const command = commands.get(cmdQuery) || commands.get(aliases.get(cmdQuery));

      if (!command) {
        return message.reply(`❌ Aray jani! "${cmdQuery}" naam ki koi command nahi mili.`);
      }

      const cfg = command.config;

      const getRoleText = (r) => {
        if (r === 0) return "Sab Users (Public)";
        if (r === 1) return "Group Admin Only";
        return "Bot Owner (TAHA KHAN)";
      };

      let card = `╔════════ COMMAND CARD ════════╗\n`;
      card += `║ 🎀 𝗡𝗔𝗠𝗘       : ${cfg.name.toUpperCase()}\n`;
      card += `║ 🔄 𝗔𝗟𝗜𝗔𝗦𝗘𝗦    : ${cfg.aliases && cfg.aliases.length > 0 ? cfg.aliases.join(", ") : "None"}\n`;
      card += `║ 📂 𝗖𝗔𝗧𝗘𝗚𝗢𝗥𝗬  : ${(cfg.category || "General").toUpperCase()}\n`;
      card += `║ 🛡️ 𝗣𝗘𝗥𝗠𝗜𝗦𝗦𝗜𝗢𝗡 : ${getRoleText(cfg.role)}\n`;
      card += `║ ⏱️ 𝗖𝗢𝗢𝗟𝗗𝗢𝗪𝗡  : ${cfg.countDown || 2}s\n`;
      card += `╠══════════════════════════════╣\n`;
      card += `║ 📝 𝗗𝗘𝗦𝗖𝗥𝗜𝗣𝗧𝗜𝗢𝗡 :\n`;
      card += `║ ${cfg.description?.ur || cfg.description?.en || "No description provided."}\n`;
      card += `╠══════════════════════════════╣\n`;
      card += `║ 🚀 𝗨𝗦𝗔𝗚𝗘 :\n`;
      
      const usageGuide = (cfg.guide?.ur || cfg.guide?.en || `{pn} ${cfg.name}`)
        .replace(/{pn}/g, prefix + cfg.name)
        .replace(/{p}/g, prefix);

      card += `║ ${usageGuide}\n`;
      card += `╚══════════════════════════════╝\n`;
      card += `👑 𝗢𝗪𝗡𝗘𝗥 & 𝗗𝗘𝗩𝗘𝗟𝗢𝗣𝗘𝗥: 𝐓𝐀𝐇𝐀 𝐊𝐇𝐀𝐍`;

      const sentCard = await message.reply(card);
      if (sentCard?.messageID) {
        setTimeout(() => message.unsend(sentCard.messageID), 90000);
      }
    }
  }
};
