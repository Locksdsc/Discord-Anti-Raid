# Ghost Anti-Nuke


*Please read the [disclaimer](https://github.com/Fowlmas/Ghost-Anti-Nuke#disclaimer) section before reading forward. Also read everything that is said here to avoid any confusion and unnecessary questions*

## Features:
1. `Protect From Unathorised Bans.`
2. `Protect From Unathorised Kicks.`
3. `Protect From Unathorised Role Creation.`
4. `Protect From Unathorised Passing of potential dangerous permissions.`
5. `Protect From Unathorised Adding of a bot.`
6. `Protect From Unathorised Members joining your guild(s).`
7. `Protect From Unathorised Mass Channel Creation.`
8. `Protect From Unathorised Mass Channel from being deleted.`
9. `Protect From Unathorised Invitation to a guild.`
10. `Protect From Unathorised Role update to potential dangerous permissions.`
11. `Whitelisting.`
12. `Blacklisting.`
13. `Trust System.`

## Current Benchmark(s): Bypass

- Selfbot Nuker: `53 bans`
- Bot Nuker: `26 bans`

*Only fast nukers are used for testing. A generic nuke tool would not get passed **50 bans.***


# Requirements Before Set-up:

1. [Node.JS](https://nodejs.org/en/) installed.
2. Code Editor: VSC(recommended), Sublime, Atom etc.

# Set-up: Bot

1. Go to your [Discord Developers Applications](https://discord.com/developers/applications) and create a new bot | You can use an existing one.
2. Go to the "Bot" section and scroll down till you see "Privileged Gateway Intents".
3. Select both **Presence Intent** and **Server Members Intent**.

### Example

![intents](https://cdn.discordapp.com/attachments/827172524324421732/827173234461245450/unknown.png)

# Set-up: Script

1. Run the `Launch` file and it will install npm then wait for all the packages to be installed.
1. Right click on the `settings.json` file.
2. Open the file either on Notepad or a code editor i.e VSC (Visual Studio Code).
3. Fill in ALL the gaps.
4. Save.

### Example

![settings](https://cdn.discordapp.com/attachments/827172524324421732/827173902585298954/settings.PNG)

### `settings.json`: Objects Explained

* `prefix` |`string`| Your Bot Prefix.
* `token` |`string`| Your Bot Token.
* `founder` |`string`| Your Discord Tag.
* `founderId` |`string`| Your Discord User ID.
* `author` |`string`| My Discord Tag. **(Do not remove.)**
* `authorID` |`string`| My Discord User ID. **(Do not remove.)**
* `github` |`string`| My Github Profile. **(Do not remove.)**
* `sourceCode` |`string`| Anti Nuke Source Code. **(Do not remove.)**
* `inviteLink` |`string`| Your Bot Invite link. (Admin required.)
* `SupportServer` |`string`| A server of your choice. 
* `AllowGuilds` |`bool`| Permission for bot to be used in different servers. Default set to `false`.
* `LockGuildID` |`string`| A server where your bot will soley operate in. (If `AllowGuilds` is set to true this is inefective.)
* `PermittedGuilds` |`Array`| An array of servers you'd like the bot to operate in.

## Why your bot keeps leaving:

*The guild which you invited the bot or trying to run a command in is not whitelisted.*

if: `AllowGuilds` is set to `false`

- You can only add **one** guild ID to the `LockGuildID` object.

if: `AllowGuilds` is set to `true`

- You can add multiple guild ID's to the `PermittedGuilds` Array
- If your previous guild ID which is in `LockGuildID` is not in `PermittedGuilds` add it so it wont leave the server.

## Start-up:

1. Run the `run.bat` file.

## Commands Showcase:

| Help | 
| ------------- | 
| ![image](https://cdn.discordapp.com/attachments/827172524324421732/827174478148403270/help.PNG) |

| Whitelist | Blacklist | 
| ------------- | ------------- |
| ![image](https://cdn.discordapp.com/attachments/827172524324421732/827174834731483166/whitelist.PNG) | ![image](https://cdn.discordapp.com/attachments/827172524324421732/827175039190958121/blacklist.PNG) |

| Trust | Enable & Disable |
| ------------- | ------------- |
![image](https://cdn.discordapp.com/attachments/827172524324421732/827175669816623145/trust.PNG) | ![image](https://cdn.discordapp.com/attachments/827172524324421732/827175686337724416/Enabling__Disabling.PNG) |

| Adding & Removing Guilds | 
| ------------- | 
| ![image](https://cdn.discordapp.com/attachments/827172524324421732/827175701333016616/Adding__Removing.PNG) |

# Things to note:

- Your bot must first be allocated a guild. You can do this by setting your server ID to the `LockGuild` object in the `Commands/settings.json` file.
- If you want the bot to be added to other servers you must enable guilds. **The server your bot joins must be permitted/whitelisted before joining or it will leave.**
- If a command is ran on a non-permitted guild, the bot will leave.
- The trust system allows a user to add/remove guilds, blacklist/whitelist users, enable/disable guilds. **They cannot allocate of users to the trust system. Give this permission to the people you trust the most.**
- Whitelisted and Trusted users are not effected by the anti nuke. They will not be banned.
- Blacklisted users are unable to join the guild(s) the bot is in.
- Once you enable guilds (can be done by setting the `AllowGuilds` object to true), make sure you add your `lockGuild` ID to the `PermittedGuilds` Array for every command to function.

### Examples

| Blacklisted User Attempt to join server | Unauthorised Ban |
| ------------- | ------------- |
![image](https://cdn.discordapp.com/attachments/827172524324421732/827176770817359872/blacklist_ban.PNG) | ![image](https://cdn.discordapp.com/attachments/827172524324421732/827184790443786280/un_ban.PNG) |

# Disclaimer

This tool is designed for private use. It's meant to protect your server alone. Better suited for **one** server. Blacklisting, Trust and Whitelisting will not differ from each server your bot will be in.

