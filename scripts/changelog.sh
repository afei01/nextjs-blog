# #!/bin/bash

# while [[ "$#" > 0 ]];
# do
#     case $1 in
#     -r|--release) release="$2"; shift;;
#     # -b|--branch) branch="$2"; shift;;
#     -t|--tag-prefix) prefix="$2"; shift;;
#     -p|--prerelease) prerelease="$2"; shift;;
#     -n|--no-verify) no="true"; shift;;
#     *) echo "❌❌❌ Unknown parameter passed: $1"; exit 1;;
#     esac; shift;
# done

# # Default as minor, the argument major, minor or patch:
# if [ -z "$release" ]; then
#     release="patch";
# fi

# echo "👌🏻 Release as $release"

# # Generate version number and tag
# if [ "$no" ]
# then
#     standard-version --no-erify --infile CHANGELOG.md
#     echo "👌🏻 no-verify"
# else
#     # standard-version -r $release --tag-prefix $prefix --prerelease $prerelease --infile CHANGELOG.md
#     standard-version -r $release --tag-prefix $prefix --infile CHANGELOG.md
# fi;

# # git push --follow-tags
# # echo '✅ git push success'
