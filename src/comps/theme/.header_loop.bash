#!/bin/bash

for filename in ./*.js; do
	# echo "$filename"

	a="$filename"

	# b=$(basename $a)
	# echo $b


	xpath=${a%/*} 
	xbase=${a##*/}
	xfext=${xbase##*.}
	xpref=${xbase%.*}

	# echo path=${xpath}
	# echo pref=${xpref}
	# echo ext=${xfext}

	echo $xpref

	echo "import React, { Component } from 'react';" >> "$filename"
	echo "const $xpref = () => (<h1>$xpref</h1>);" >> "$filename"
	echo "export default $xpref;" >> "$filename"
done


# a=/tmp/xx/file.tar.gz
# xpath=${a%/*} 
# xbase=${a##*/}
# xfext=${xbase##*.}
# xpref=${xbase%.*}

# echo path=${xpath}
# echo pref=${xpref}
# echo ext=${xfext}

# path=/tmp/xx
# pref=file.tar
# ext=gz



# a="$PWD"/Chips.js
# echo $a

# xpath=${a%/*} 
# xbase=${a##*/}
# xfext=${xbase##*.}
# xpref=${xbase%.*}

# echo path=${xpath}
# echo pref=${xpref}
# echo ext=${xfext}

# echo "import React, { Component } from 'react';" >> "$a"
# echo "const $xpref = () => (<h1>$xpref</h1>);" >> "$a"