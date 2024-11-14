// for explaination : object to array convert
//in this data in object in to object formate {{}} we want object to array format [{}]
let obj = {
  "-OBd0cMnh_R_GzTliVmn": {
    dsc: "post-1 dsc",
    title: "post-1",
  },
  "-OBd1AqkFyAlPLXDWhjg": {
    dsc: "post-2 dsc",
    title: "post-2",
  },
  "-OBd5_Sx7FtveVMvK9BX": {
    dsc: "post-3 dsc",
    title: "post-3",
  },
  "-OBd5idEg-qQK3RcuvYu": {
    dsc: "post-4 dsc",
    title: "post-4",
  },
  "-OBd6-W7QdxwsSkbtVPV": {
    dsc: "asdsadsa",
    title: "asxdsa",
  },
};

let arr = Object.keys(obj).map((key) => ({ id: key, ...obj[key] }));
console.log(arr);
