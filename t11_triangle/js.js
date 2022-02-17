let num = "* ",
    i = 1,
    table = ' ';

while (i <= 6) {
    table += num + "\n";
    i++;
    num += "* ";
}

alert(table);