module.exports = rows => {
	return new Promise((resolve, reject) => {
		try {
			const words = rows
				.filter(filterValidRow)
				.map(removePunctuations)
				.map(removeTags)
				.reduce(mergeRows)
				.split(' ')
				.map(word => word.toLowerCase())
				.map(word => word.replace(/"/g, ''));

			resolve(words);          
		} catch (error) {
			reject(error);
		}
	});
};

function filterValidRow(row) {
	const notNumeric = !parseInt(row.trim());
	const notEmpty = !!row.trim();
	const notInterval = !row.includes('-->');
	
	return notNumeric && notEmpty && notInterval;
}

const removePunctuations = row => row.replace(/[0-9\][#♪:&_,?!.-]/g, '');

const removeTags = row => row.replace(/(<[^>]+)>/gi,'').trim();

const mergeRows = (fullText, row) => `${fullText} ${row}`;