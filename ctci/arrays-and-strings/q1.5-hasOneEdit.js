// 1.5 One Away
function hasOneEdit(s1, s2) {
    if (s1 === s2) {
        return false;
    }
    // Check for replaced character edit
    if (s1.length == s2.length) {
        let edits = 0;

        for (let i = 0; i < s1.length; i++) {
            if (s1[i] !== s2[i]) {
                edits++;
            }
        }
        return (edits == 1);
    }
    // Check for inserted or removed character edit
    if (Math.abs(s1.length - s2.length) == 1) {
        let shortest = (s1.length > s2.length) ? s2 : s1;  // TODO: write more concisely!
        let longest = (s1.length > s2.length) ? s1 : s2;

        for (let i = 0; i < shortest.length; i++) {
            if (!longest.includes(shortest[i])) {
                return false;
            }
        }
        return true;
    }
};

module.exports = hasOneEdit;
