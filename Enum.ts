/**
 * enums means enumeration
 * enum is datatype
 * it support both numeric and string values
 * using enum developer define a set of named constant.
 * using enums it is easier to document intent or create a set of distinct cases
 * 
 */
enum Days{
    mon,Tue,Wed,Thrus,Fri,Sat,Sun
}
let whichDays:Days
whichDays=Days.Fri
whichDays = Days.Sat
console.log(whichDays);