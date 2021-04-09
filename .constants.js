module.exports = Object.freeze({
  TOKEN: '1600099178:AAHt4B0S2lXarr7rCipfgZhlSkxAolQup-Q', //Telegramm Bot token!
  ARIA_SECRET: '1234', //Enter the secret key you entered in `aria.sh` file while editing
  ARIA_DOWNLOAD_LOCATION: '/data/data/com.termux/files/home/aria2', //This is for heroku on termux change it to your directory of cloned repo using "pwd" command
  ARIA_DOWNLOAD_LOCATION_ROOT: '/', //"No need to touch this!" The mountpoint that contains ARIA_DOWNLOAD_LOCATION
  ARIA_FILTERED_DOMAINS: ['cruzing.xyz'], // Prevent downloading from URLs containing these substrings
  ARIA_FILTERED_FILENAMES: [], // Files/top level directories with these substrings in the filename won't be downloaded
  GDRIVE_PARENT_DIR_ID: '18POz1-rpB5ho2SVvUuAKah3d53Matqe4',
  SUDO_USERS: [537370867, 794908815],	// Telegram user IDs. These users can use the bot in any chat.
  AUTHORIZED_CHATS: [23543, 3535],	// Telegram chat IDs. Anyone in these chats can use the bot.
  DOWNLOAD_NOTIFY_TARGET: {  // Information about the web service to notify on download completion.
    enabled: false,   // Set this to true to use the notify functionality
    host: 'hostname.domain',
    port: 80,
    path: '/botNotify'
  } 
});
