const { ipcMain } = require('electron');

const pathsToRows = require('./pathsToRows');
const cleanData = require('./cleanData');
const groupWords = require('./groupWords');

ipcMain.on('process-subtitles', (event, paths) => {
	pathsToRows(paths)
		.then(rows => cleanData(rows))
		.then(words => groupWords(words))
		.then((groupedWords) => event.reply('process-subtitles', groupedWords));
});
