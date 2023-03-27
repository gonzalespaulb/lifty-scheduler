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