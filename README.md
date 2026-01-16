Martinez Kivisaari Einar 
einar.martinez@student.vinci.be
https://github.com/einar-martinezkivisaari-vinci/IPLsocial.git
///
validmail takes a string as its parameter.
It checks (in order) if:
-the string contains at least one @
-the string contains no blank spaces
-the string doesn't end in a .
-the substring starting at @ contains at least one .
-the substring before @ isn't empty
if any of these are false it returns false before checking the rest
(the conditions 3 and 4 combined also require the substring after @ to not be empty and contain more than just a .)
///
npm test