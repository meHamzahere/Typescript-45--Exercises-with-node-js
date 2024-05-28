var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Making a Array of countries and print its original order
var conuntriesToVisit = ["China", "Denmark", "Brazil", "Argentina"];
console.log("Original Order", conuntriesToVisit);
// Print the array in alphabetical oreder without modifing the actual array list
console.log("Alphabetical Order", __spreadArray([], conuntriesToVisit, true).sort());
//show that the array is still in this order
console.log("Sill in original order", conuntriesToVisit);
// Print a array in reverse order without modifing the actual array list
console.log("Reverse Order", __spreadArray([], conuntriesToVisit, true).reverse());
//show that the array is still in this order
console.log("Sill in original order", conuntriesToVisit);
// we have changed the original array order now
console.log("Original Array reversed", conuntriesToVisit.reverse());
// Print the array to show that it's back to it's original order
console.log("Back to orignal Order", conuntriesToVisit.reverse());
// Print the array to show that its order has been changed in alphabetical order now
console.log("Sorted in alphabetical order", conuntriesToVisit.sort());
// we have changed again the orignal array order now in reverse order again
console.log("Orignal Array reversed again", conuntriesToVisit.reverse());
