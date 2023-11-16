
function to_uppercase() {
    str=$1
    upper=$(echo "$str" | awk '{print toupper($0)}')
    echo $upper
}
