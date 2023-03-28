export const sortAlphabetically = (objArr) => {

    const sortArray = (a, b) => {
      if(a.name > b.name) {
        return 1;
      }

      if(a.name < b.name) {
        return -1;
      }

      else {
        return 0;
      }
    }

    objArr.sort(sortArray);
}

export const upperCaseEveryOther = (designationName) => {

    const nameSplit = designationName.split(" ");

    const toUpperCase = nameSplit.map((name) => {
        const firstLetter = name.charAt(0);

        const firstLetterCap = firstLetter.toUpperCase();

        const remainingLetters = name.slice(1);

        const capitalizedWord = firstLetterCap + remainingLetters;

        return capitalizedWord;
    })

    const everyOtherCap = toUpperCase.join(" ");

    return everyOtherCap;
}