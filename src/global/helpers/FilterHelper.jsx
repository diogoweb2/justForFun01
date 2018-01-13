import natsort from "natsort";
import assert from "assert";
// import matchSorter from "match-sorter"; // https://github.com/kentcdodds/match-sorter
import * as JsSearch from "js-search"; // https://github.com/bvaughn/js-search

const FilterHelper = {
  match: (data, matchStr, matchKeys, matchKeysIndex) => {
    let objList = data.slice();

    // if (!showAll) {
    //   objList = matchSorter(objList, matchStr, {
    //     keys: matchKeys
    //   });
    // }
    if (String(matchStr).trim().length > 0) {
      const search = new JsSearch.Search(matchKeysIndex);

      for (let i = 0; i < matchKeys.length; i += 1) {
        search.addIndex(matchKeys[i]);
      }

      search.addDocuments(data);

      objList = search.search(String(matchStr));
    }
    return objList;
  },

  sort: (data, sortBy, sortByDesc) => {
    assert(data && sortBy && typeof sortByDesc === "boolean");
    const sorter = natsort({ insensitive: true, desc: sortByDesc || false });
    // slice to dont change state directly

    return data
      .slice()
      .sort((a, b) => sorter(a[sortBy].trim(), b[sortBy].trim()));
  }
};
export default FilterHelper;
