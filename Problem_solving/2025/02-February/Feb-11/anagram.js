let isAnagram = function (s, t) {
    if(s.length != t.length) return false 

    s = s.split("").sort().join("");
    t = t.split("").sort().join("");
    return s === t
    
};

