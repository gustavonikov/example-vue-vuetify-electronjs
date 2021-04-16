module.exports = words => {
	return new Promise((resolve, reject) => {
		try {
			const groupedWords = words.reduce((object, word) => {
				if (object[word]) {
					object[word] ++;
				} else {
					object[word] = 1;
				}

				return object;
			}, {});

			const groupedWordsArray = Object.keys(groupedWords)
				.map(key => ({
					name: key,
					amount: groupedWords[key]
				}))
                .sort((word1, word2) => word2.amount - word1.amount)

			resolve(groupedWordsArray);          
		} catch (error) {
			reject(error);
		}
	});
};
