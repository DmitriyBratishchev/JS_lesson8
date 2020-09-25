'use strict';

function filterByType() {
  let argument = Array.from(arguments);

  function filterNeedType(value) {
    if (value === argument[0]){
      return false;
    }
    else{ return typeof(value) === argument[0];
    }
  }

  let onlyNeedType = argument.filter(filterNeedType);
 console.log(onlyNeedType);
}

filterByType('number', 2, 3, 'a', 4, 'b', true, false)
filterByType('string', 2, 3, 'a', 'b', 'c', true, false)
filterByType('boolean', 2, 3, 4, 'a', 'b', true, false)
