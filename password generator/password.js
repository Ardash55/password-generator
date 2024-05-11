let simbol1;
let simbol2;
let simbol3;
let simbol4;
let simbol5;
let simbol6;
let simbol7;
let simbol8;
let simbol9;
let simbol10;
let simbol11;
let simbol12;
let simbol13;
let simbol14;
let simbol15;
let simbol16;
let simbol17;
let simbol18;
let simbol19;
let simbol20;
let type;
let simbol;
let password;

function typeSimbol() {
    type = Math.random();
    if (type < 1 / 3) {
        type = 'number';
    } else if (type > 2 / 3) {
        type = 'special simbol';
    } else {
        type = 'letter';
    }
}

function s1() {
    typeSimbol();
    if (type === 'number') {
        simbol1 = Math.round(Math.random() * 10) - 1;
        if (simbol1 < 0) {
            simbol1 = 0;
        }
    } else if (type === 'special simbol') {
        simbol = Math.random();
        if (simbol < 0.1) {
            simbol1 = '%';
        } else if (simbol < 0.2) {
            simbol1 = '*';
        } else if (simbol < 0.3) {
            simbol1 = '&';
        } else if (simbol < 0.4) {
            simbol1 = '(';
        } else if (simbol < 0.5) {
            simbol1 = ')';
        } else if (simbol < 0.6) {
            simbol1 = '-';
        } else if (simbol < 0.7) {
            simbol1 = '=';
        } else if (simbol < 0.8) {
            simbol1 = '+';
        } else if (simbol < 0.9) {
            simbol1 = '/';
        } else if (simbol < 1) {
            simbol1 = ';';
        }
    } else if (type === 'letter') {
        simbol = Math.random();
        if (simbol < 0.04) {
            simbol1 = 'q';
        } else if (simbol < 0.08) {
            simbol1 = 'w';
        } else if (simbol < 0.12) {
            simbol1 = 'e';
        } else if (simbol < 0.16) {
            simbol1 = 'r';
        } else if (simbol < 0.2) {
            simbol1 = 't';
        } else if (simbol < 0.24) {
            simbol1 = 'y';
        } else if (simbol < 0.28) {
            simbol1 = 'u';
        } else if (simbol < 0.32) {
            simbol1 = 'i';
        } else if (simbol < 0.36) {
            simbol1 = 'o';
        } else if (simbol < 0.4) {
            simbol1 = 'p';
        } else if (simbol < 0.44) {
            simbol1 = 'a';
        } else if (simbol < 0.48) {
            simbol1 = 's';
        } else if (simbol < 0.52) {
            simbol1 = 'd';
        } else if (simbol < 0.56) {
            simbol1 = 'f';
        } else if (simbol < 0.6) {
            simbol1 = 'g';
        } else if (simbol < 0.64) {
            simbol1 = 'h';
        } else if (simbol < 0.68) {
            simbol1 = 'j';
        } else if (simbol < 0.72) {
            simbol1 = 'k';
        } else if (simbol < 0.76) {
            simbol1 = 'l';
        } else if (simbol < 0.8) {
            simbol1 = 'z';
        } else if (simbol < 0.84) {
            simbol1 = 'x';
        } else if (simbol < 0.88) {
            simbol1 = 'c';
        } else if (simbol < 0.92) {
            simbol1 = 'v';
        } else if (simbol < 0.96) {
            simbol1 = 'b';
        } else if (simbol < 1) {
            simbol1 = 'n';
        }
    }
}

function s2() {
    typeSimbol();
    if (type === 'number') {
        simbol2 = Math.round((Math.random()) * 10) - 1;
        if (simbol2 < 0) {
            simbol2 = 0;
        }
    } else if (type === 'special simbol') {
        simbol = Math.random();
        if (simbol < 0.1) {
            simbol2 = '%';
        } else if (simbol < 0.2) {
            simbol2 = '*';
        } else if (simbol < 0.3) {
            simbol2 = '&';
        } else if (simbol < 0.4) {
            simbol2 = '(';
        } else if (simbol < 0.5) {
            simbol2 = ')';
        } else if (simbol < 0.6) {
            simbol2 = '-';
        } else if (simbol < 0.7) {
            simbol2 = '=';
        } else if (simbol < 0.8) {
            simbol2 = '+';
        } else if (simbol < 0.9) {
            simbol2 = '/';
        } else if (simbol < 1) {
            simbol2 = ';';
        }
    } else if (type === 'letter') {
        simbol = Math.random();
        if (simbol < 0.04) {
            simbol2 = 'q';
        } else if (simbol < 0.08) {
            simbol2 = 'w';
        } else if (simbol < 0.12) {
            simbol2 = 'e';
        } else if (simbol < 0.16) {
            simbol2 = 'r';
        } else if (simbol < 0.2) {
            simbol2 = 't';
        } else if (simbol < 0.24) {
            simbol2 = 'y';
        } else if (simbol < 0.28) {
            simbol2 = 'u';
        } else if (simbol < 0.32) {
            simbol2 = 'i';
        } else if (simbol < 0.36) {
            simbol2 = 'o';
        } else if (simbol < 0.4) {
            simbol2 = 'p';
        } else if (simbol < 0.44) {
            simbol2 = 'a';
        } else if (simbol < 0.48) {
            simbol2 = 's';
        } else if (simbol < 0.52) {
            simbol2 = 'd';
        } else if (simbol < 0.56) {
            simbol2 = 'f';
        } else if (simbol < 0.6) {
            simbol2 = 'g';
        } else if (simbol < 0.64) {
            simbol2 = 'h';
        } else if (simbol < 0.68) {
            simbol2 = 'j';
        } else if (simbol < 0.72) {
            simbol2 = 'k';
        } else if (simbol < 0.76) {
            simbol2 = 'l';
        } else if (simbol < 0.8) {
            simbol2 = 'z';
        } else if (simbol < 0.84) {
            simbol2 = 'x';
        } else if (simbol < 0.88) {
            simbol2 = 'c';
        } else if (simbol < 0.92) {
            simbol2 = 'v';
        } else if (simbol < 0.96) {
            simbol2 = 'b';
        } else if (simbol < 1) {
            simbol2 = 'n';
        }
    }
}

function s3() {
    typeSimbol();
    if (type === 'number') {
        simbol3 = Math.round((Math.random()) * 10) - 1;
        if (simbol3 < 0) {
            simbol3 = 0;
        }
    } else if (type === 'special simbol') {
        simbol = Math.random();
        if (simbol < 0.1) {
            simbol3 = '%';
        } else if (simbol < 0.2) {
            simbol3 = '*';
        } else if (simbol < 0.3) {
            simbol3 = '&';
        } else if (simbol < 0.4) {
            simbol3 = '(';
        } else if (simbol < 0.5) {
            simbol3 = ')';
        } else if (simbol < 0.6) {
            simbol3 = '-';
        } else if (simbol < 0.7) {
            simbol3 = '=';
        } else if (simbol < 0.8) {
            simbol3 = '+';
        } else if (simbol < 0.9) {
            simbol3 = '/';
        } else if (simbol < 1) {
            simbol3 = ';';
        }
    } else if (type === 'letter') {
        simbol = Math.random();
        if (simbol < 0.04) {
            simbol3 = 'q';
        } else if (simbol < 0.08) {
            simbol3 = 'w';
        } else if (simbol < 0.12) {
            simbol3 = 'e';
        } else if (simbol < 0.16) {
            simbol3 = 'r';
        } else if (simbol < 0.2) {
            simbol3 = 't';
        } else if (simbol < 0.24) {
            simbol3 = 'y';
        } else if (simbol < 0.28) {
            simbol3 = 'u';
        } else if (simbol < 0.32) {
            simbol3 = 'i';
        } else if (simbol < 0.36) {
            simbol3 = 'o';
        } else if (simbol < 0.4) {
            simbol3 = 'p';
        } else if (simbol < 0.44) {
            simbol3 = 'a';
        } else if (simbol < 0.48) {
            simbol3 = 's';
        } else if (simbol < 0.52) {
            simbol3 = 'd';
        } else if (simbol < 0.56) {
            simbol3 = 'f';
        } else if (simbol < 0.6) {
            simbol3 = 'g';
        } else if (simbol < 0.64) {
            simbol3 = 'h';
        } else if (simbol < 0.68) {
            simbol3 = 'j';
        } else if (simbol < 0.72) {
            simbol3 = 'k';
        } else if (simbol < 0.76) {
            simbol3 = 'l';
        } else if (simbol < 0.8) {
            simbol3 = 'z';
        } else if (simbol < 0.84) {
            simbol3 = 'x';
        } else if (simbol < 0.88) {
            simbol3 = 'c';
        } else if (simbol < 0.92) {
            simbol3 = 'v';
        } else if (simbol < 0.96) {
            simbol3 = 'b';
        } else if (simbol < 1) {
            simbol3 = 'n';
        }
    }
}

function s4() {
    typeSimbol();
    if (type === 'number') {
        simbol4 = Math.round((Math.random()) * 10) - 1;
        if (simbol4 < 0) {
            simbol4 = 0;
        }
    } else if (type === 'special simbol') {
        simbol = Math.random();
        if (simbol < 0.1) {
            simbol4 = '%';
        } else if (simbol < 0.2) {
            simbol4 = '*';
        } else if (simbol < 0.3) {
            simbol4 = '&';
        } else if (simbol < 0.4) {
            simbol4 = '(';
        } else if (simbol < 0.5) {
            simbol4 = ')';
        } else if (simbol < 0.6) {
            simbol4 = '-';
        } else if (simbol < 0.7) {
            simbol4 = '=';
        } else if (simbol < 0.8) {
            simbol4 = '+';
        } else if (simbol < 0.9) {
            simbol4 = '/';
        } else if (simbol < 1) {
            simbol4 = ';';
        }
    } else if (type === 'letter') {
        simbol = Math.random();
        if (simbol < 0.04) {
            simbol4 = 'q';
        } else if (simbol < 0.08) {
            simbol4 = 'w';
        } else if (simbol < 0.12) {
            simbol4 = 'e';
        } else if (simbol < 0.16) {
            simbol4 = 'r';
        } else if (simbol < 0.2) {
            simbol4 = 't';
        } else if (simbol < 0.24) {
            simbol4 = 'y';
        } else if (simbol < 0.28) {
            simbol4 = 'u';
        } else if (simbol < 0.32) {
            simbol4 = 'i';
        } else if (simbol < 0.36) {
            simbol4 = 'o';
        } else if (simbol < 0.4) {
            simbol4 = 'p';
        } else if (simbol < 0.44) {
            simbol4 = 'a';
        } else if (simbol < 0.48) {
            simbol4 = 's';
        } else if (simbol < 0.52) {
            simbol4 = 'd';
        } else if (simbol < 0.56) {
            simbol4 = 'f';
        } else if (simbol < 0.6) {
            simbol4 = 'g';
        } else if (simbol < 0.64) {
            simbol4 = 'h';
        } else if (simbol < 0.68) {
            simbol4 = 'j';
        } else if (simbol < 0.72) {
            simbol4 = 'k';
        } else if (simbol < 0.76) {
            simbol4 = 'l';
        } else if (simbol < 0.8) {
            simbol4 = 'z';
        } else if (simbol < 0.84) {
            simbol4 = 'x';
        } else if (simbol < 0.88) {
            simbol4 = 'c';
        } else if (simbol < 0.92) {
            simbol4 = 'v';
        } else if (simbol < 0.96) {
            simbol4 = 'b';
        } else if (simbol < 1) {
            simbol4 = 'n';
        }
    }
}

function s5() {
    typeSimbol();
    if (type === 'number') {
        simbol5 = Math.round((Math.random()) * 10) - 1;
        if (simbol5 < 0) {
            simbol5 = 0;
        }
    } else if (type === 'special simbol') {
        simbol = Math.random();
        if (simbol < 0.1) {
            simbol5 = '%';
        } else if (simbol < 0.2) {
            simbol5 = '*';
        } else if (simbol < 0.3) {
            simbol5 = '&';
        } else if (simbol < 0.4) {
            simbol5 = '(';
        } else if (simbol < 0.5) {
            simbol5 = ')';
        } else if (simbol < 0.6) {
            simbol5 = '-';
        } else if (simbol < 0.7) {
            simbol5 = '=';
        } else if (simbol < 0.8) {
            simbol5 = '+';
        } else if (simbol < 0.9) {
            simbol5 = '/';
        } else if (simbol < 1) {
            simbol5 = ';';
        }
    } else if (type === 'letter') {
        simbol = Math.random();
        if (simbol < 0.04) {
            simbol5 = 'q';
        } else if (simbol < 0.08) {
            simbol5 = 'w';
        } else if (simbol < 0.12) {
            simbol5 = 'e';
        } else if (simbol < 0.16) {
            simbol5 = 'r';
        } else if (simbol < 0.2) {
            simbol5 = 't';
        } else if (simbol < 0.24) {
            simbol5 = 'y';
        } else if (simbol < 0.28) {
            simbol5 = 'u';
        } else if (simbol < 0.32) {
            simbol5 = 'i';
        } else if (simbol < 0.36) {
            simbol5 = 'o';
        } else if (simbol < 0.4) {
            simbol5 = 'p';
        } else if (simbol < 0.44) {
            simbol5 = 'a';
        } else if (simbol < 0.48) {
            simbol5 = 's';
        } else if (simbol < 0.52) {
            simbol5 = 'd';
        } else if (simbol < 0.56) {
            simbol5 = 'f';
        } else if (simbol < 0.6) {
            simbol5 = 'g';
        } else if (simbol < 0.64) {
            simbol5 = 'h';
        } else if (simbol < 0.68) {
            simbol5 = 'j';
        } else if (simbol < 0.72) {
            simbol5 = 'k';
        } else if (simbol < 0.76) {
            simbol5 = 'l';
        } else if (simbol < 0.8) {
            simbol5 = 'z';
        } else if (simbol < 0.84) {
            simbol5 = 'x';
        } else if (simbol < 0.88) {
            simbol5 = 'c';
        } else if (simbol < 0.92) {
            simbol5 = 'v';
        } else if (simbol < 0.96) {
            simbol5 = 'b';
        } else if (simbol < 1) {
            simbol5 = 'n';
        }
    }
}

function s6() {
    typeSimbol();
    if (type === 'number') {
        simbol6 = Math.round((Math.random()) * 10) - 1;
        if (simbol6 < 0) {
            simbol6 = 0;
        }
    } else if (type === 'special simbol') {
        simbol = Math.random();
        if (simbol < 0.1) {
            simbol6 = '%';
        } else if (simbol < 0.2) {
            simbol6 = '*';
        } else if (simbol < 0.3) {
            simbol6 = '&';
        } else if (simbol < 0.4) {
            simbol6 = '(';
        } else if (simbol < 0.5) {
            simbol6 = ')';
        } else if (simbol < 0.6) {
            simbol6 = '-';
        } else if (simbol < 0.7) {
            simbol6 = '=';
        } else if (simbol < 0.8) {
            simbol6 = '+';
        } else if (simbol < 0.9) {
            simbol6 = '/';
        } else if (simbol < 1) {
            simbol6 = ';';
        }
    } else if (type === 'letter') {
        simbol = Math.random();
        if (simbol < 0.04) {
            simbol6 = 'q';
        } else if (simbol < 0.08) {
            simbol6 = 'w';
        } else if (simbol < 0.12) {
            simbol6 = 'e';
        } else if (simbol < 0.16) {
            simbol6 = 'r';
        } else if (simbol < 0.2) {
            simbol6 = 't';
        } else if (simbol < 0.24) {
            simbol6 = 'y';
        } else if (simbol < 0.28) {
            simbol6 = 'u';
        } else if (simbol < 0.32) {
            simbol6 = 'i';
        } else if (simbol < 0.36) {
            simbol6 = 'o';
        } else if (simbol < 0.4) {
            simbol6 = 'p';
        } else if (simbol < 0.44) {
            simbol6 = 'a';
        } else if (simbol < 0.48) {
            simbol6 = 's';
        } else if (simbol < 0.52) {
            simbol6 = 'd';
        } else if (simbol < 0.56) {
            simbol6 = 'f';
        } else if (simbol < 0.6) {
            simbol6 = 'g';
        } else if (simbol < 0.64) {
            simbol6 = 'h';
        } else if (simbol < 0.68) {
            simbol6 = 'j';
        } else if (simbol < 0.72) {
            simbol6 = 'k';
        } else if (simbol < 0.76) {
            simbol6 = 'l';
        } else if (simbol < 0.8) {
            simbol6 = 'z';
        } else if (simbol < 0.84) {
            simbol6 = 'x';
        } else if (simbol < 0.88) {
            simbol6 = 'c';
        } else if (simbol < 0.92) {
            simbol6 = 'v';
        } else if (simbol < 0.96) {
            simbol6 = 'b';
        } else if (simbol < 1) {
            simbol6 = 'n';
        }
    }
}

function s7() {
    typeSimbol();
    if (type === 'number') {
        simbol7 = Math.round((Math.random()) * 10) - 1;
        if (simbol7 < 0) {
            simbol7 = 0;
        }
    } else if (type === 'special simbol') {
        simbol = Math.random();
        if (simbol < 0.1) {
            simbol7 = '%';
        } else if (simbol < 0.2) {
            simbol7 = '*';
        } else if (simbol < 0.3) {
            simbol7 = '&';
        } else if (simbol < 0.4) {
            simbol7 = '(';
        } else if (simbol < 0.5) {
            simbol7 = ')';
        } else if (simbol < 0.6) {
            simbol7 = '-';
        } else if (simbol < 0.7) {
            simbol7 = '=';
        } else if (simbol < 0.8) {
            simbol7 = '+';
        } else if (simbol < 0.9) {
            simbol7 = '/';
        } else if (simbol < 1) {
            simbol7 = ';';
        }
    } else if (type === 'letter') {
        simbol = Math.random();
        if (simbol < 0.04) {
            simbol7 = 'q';
        } else if (simbol < 0.08) {
            simbol7 = 'w';
        } else if (simbol < 0.12) {
            simbol7 = 'e';
        } else if (simbol < 0.16) {
            simbol7 = 'r';
        } else if (simbol < 0.2) {
            simbol7 = 't';
        } else if (simbol < 0.24) {
            simbol7 = 'y';
        } else if (simbol < 0.28) {
            simbol7 = 'u';
        } else if (simbol < 0.32) {
            simbol7 = 'i';
        } else if (simbol < 0.36) {
            simbol7 = 'o';
        } else if (simbol < 0.4) {
            simbol7 = 'p';
        } else if (simbol < 0.44) {
            simbol7 = 'a';
        } else if (simbol < 0.48) {
            simbol7 = 's';
        } else if (simbol < 0.52) {
            simbol7 = 'd';
        } else if (simbol < 0.56) {
            simbol7 = 'f';
        } else if (simbol < 0.6) {
            simbol7 = 'g';
        } else if (simbol < 0.64) {
            simbol7 = 'h';
        } else if (simbol < 0.68) {
            simbol7 = 'j';
        } else if (simbol < 0.72) {
            simbol7 = 'k';
        } else if (simbol < 0.76) {
            simbol7 = 'l';
        } else if (simbol < 0.8) {
            simbol7 = 'z';
        } else if (simbol < 0.84) {
            simbol7 = 'x';
        } else if (simbol < 0.88) {
            simbol7 = 'c';
        } else if (simbol < 0.92) {
            simbol7 = 'v';
        } else if (simbol < 0.96) {
            simbol7 = 'b';
        } else if (simbol < 1) {
            simbol7 = 'n';
        }
    }
}

function s8() {
    typeSimbol();
    if (type === 'number') {
        simbol8 = Math.round((Math.random()) * 10) - 1;
        if (simbol8 < 0) {
            simbol8 = 0;
        }
    } else if (type === 'special simbol') {
        simbol = Math.random();
        if (simbol < 0.1) {
            simbol8 = '%';
        } else if (simbol < 0.2) {
            simbol8 = '*';
        } else if (simbol < 0.3) {
            simbol8 = '&';
        } else if (simbol < 0.4) {
            simbol8 = '(';
        } else if (simbol < 0.5) {
            simbol8 = ')';
        } else if (simbol < 0.6) {
            simbol8 = '-';
        } else if (simbol < 0.7) {
            simbol8 = '=';
        } else if (simbol < 0.8) {
            simbol8 = '+';
        } else if (simbol < 0.9) {
            simbol8 = '/';
        } else if (simbol < 1) {
            simbol8 = ';';
        }
    } else if (type === 'letter') {
        simbol = Math.random();
        if (simbol < 0.04) {
            simbol8 = 'q';
        } else if (simbol < 0.08) {
            simbol8 = 'w';
        } else if (simbol < 0.12) {
            simbol8 = 'e';
        } else if (simbol < 0.16) {
            simbol8 = 'r';
        } else if (simbol < 0.2) {
            simbol8 = 't';
        } else if (simbol < 0.24) {
            simbol8 = 'y';
        } else if (simbol < 0.28) {
            simbol8 = 'u';
        } else if (simbol < 0.32) {
            simbol8 = 'i';
        } else if (simbol < 0.36) {
            simbol8 = 'o';
        } else if (simbol < 0.4) {
            simbol8 = 'p';
        } else if (simbol < 0.44) {
            simbol8 = 'a';
        } else if (simbol < 0.48) {
            simbol8 = 's';
        } else if (simbol < 0.52) {
            simbol8 = 'd';
        } else if (simbol < 0.56) {
            simbol8 = 'f';
        } else if (simbol < 0.6) {
            simbol8 = 'g';
        } else if (simbol < 0.64) {
            simbol8 = 'h';
        } else if (simbol < 0.68) {
            simbol8 = 'j';
        } else if (simbol < 0.72) {
            simbol8 = 'k';
        } else if (simbol < 0.76) {
            simbol8 = 'l';
        } else if (simbol < 0.8) {
            simbol8 = 'z';
        } else if (simbol < 0.84) {
            simbol8 = 'x';
        } else if (simbol < 0.88) {
            simbol8 = 'c';
        } else if (simbol < 0.92) {
            simbol8 = 'v';
        } else if (simbol < 0.96) {
            simbol8 = 'b';
        } else if (simbol < 1) {
            simbol8 = 'n';
        }
    }
}

function s9() {
    typeSimbol();
    if (type === 'number') {
        simbol9 = Math.round((Math.random()) * 10) - 1;
        if (simbol9 < 0) {
            simbol9 = 0;
        }
    } else if (type === 'special simbol') {
        simbol = Math.random();
        if (simbol < 0.1) {
            simbol9 = '%';
        } else if (simbol < 0.2) {
            simbol9 = '*';
        } else if (simbol < 0.3) {
            simbol9 = '&';
        } else if (simbol < 0.4) {
            simbol9 = '(';
        } else if (simbol < 0.5) {
            simbol9 = ')';
        } else if (simbol < 0.6) {
            simbol9 = '-';
        } else if (simbol < 0.7) {
            simbol9 = '=';
        } else if (simbol < 0.8) {
            simbol9 = '+';
        } else if (simbol < 0.9) {
            simbol9 = '/';
        } else if (simbol < 1) {
            simbol9 = ';';
        }
    } else if (type === 'letter') {
        simbol = Math.random();
        if (simbol < 0.04) {
            simbol9 = 'q';
        } else if (simbol < 0.08) {
            simbol9 = 'w';
        } else if (simbol < 0.12) {
            simbol9 = 'e';
        } else if (simbol < 0.16) {
            simbol9 = 'r';
        } else if (simbol < 0.2) {
            simbol9 = 't';
        } else if (simbol < 0.24) {
            simbol9 = 'y';
        } else if (simbol < 0.28) {
            simbol9 = 'u';
        } else if (simbol < 0.32) {
            simbol9 = 'i';
        } else if (simbol < 0.36) {
            simbol9 = 'o';
        } else if (simbol < 0.4) {
            simbol9 = 'p';
        } else if (simbol < 0.44) {
            simbol9 = 'a';
        } else if (simbol < 0.48) {
            simbol9 = 's';
        } else if (simbol < 0.52) {
            simbol9 = 'd';
        } else if (simbol < 0.56) {
            simbol9 = 'f';
        } else if (simbol < 0.6) {
            simbol9 = 'g';
        } else if (simbol < 0.64) {
            simbol9 = 'h';
        } else if (simbol < 0.68) {
            simbol9 = 'j';
        } else if (simbol < 0.72) {
            simbol9 = 'k';
        } else if (simbol < 0.76) {
            simbol9 = 'l';
        } else if (simbol < 0.8) {
            simbol9 = 'z';
        } else if (simbol < 0.84) {
            simbol9 = 'x';
        } else if (simbol < 0.88) {
            simbol9 = 'c';
        } else if (simbol < 0.92) {
            simbol9 = 'v';
        } else if (simbol < 0.96) {
            simbol9 = 'b';
        } else if (simbol < 1) {
            simbol9 = 'n';
        }
    }
}

function s10() {
    typeSimbol();
    if (type === 'number') {
        simbol10 = Math.round((Math.random()) * 10) - 1;
        if (simbol10 < 0) {
            simbol10 = 0;
        }
    } else if (type === 'special simbol') {
        simbol = Math.random();
        if (simbol < 0.1) {
            simbol10 = '%';
        } else if (simbol < 0.2) {
            simbol10 = '*';
        } else if (simbol < 0.3) {
            simbol10 = '&';
        } else if (simbol < 0.4) {
            simbol10 = '(';
        } else if (simbol < 0.5) {
            simbol10 = ')';
        } else if (simbol < 0.6) {
            simbol10 = '-';
        } else if (simbol < 0.7) {
            simbol10 = '=';
        } else if (simbol < 0.8) {
            simbol10 = '+';
        } else if (simbol < 0.9) {
            simbol10 = '/';
        } else if (simbol < 1) {
            simbol10 = ';';
        }
    } else if (type === 'letter') {
        simbol = Math.random();
        if (simbol < 0.04) {
            simbol10 = 'q';
        } else if (simbol < 0.08) {
            simbol10 = 'w';
        } else if (simbol < 0.12) {
            simbol10 = 'e';
        } else if (simbol < 0.16) {
            simbol10 = 'r';
        } else if (simbol < 0.2) {
            simbol10 = 't';
        } else if (simbol < 0.24) {
            simbol10 = 'y';
        } else if (simbol < 0.28) {
            simbol10 = 'u';
        } else if (simbol < 0.32) {
            simbol10 = 'i';
        } else if (simbol < 0.36) {
            simbol10 = 'o';
        } else if (simbol < 0.4) {
            simbol10 = 'p';
        } else if (simbol < 0.44) {
            simbol10 = 'a';
        } else if (simbol < 0.48) {
            simbol10 = 's';
        } else if (simbol < 0.52) {
            simbol10 = 'd';
        } else if (simbol < 0.56) {
            simbol10 = 'f';
        } else if (simbol < 0.6) {
            simbol10 = 'g';
        } else if (simbol < 0.64) {
            simbol10 = 'h';
        } else if (simbol < 0.68) {
            simbol10 = 'j';
        } else if (simbol < 0.72) {
            simbol10 = 'k';
        } else if (simbol < 0.76) {
            simbol10 = 'l';
        } else if (simbol < 0.8) {
            simbol10 = 'z';
        } else if (simbol < 0.84) {
            simbol10 = 'x';
        } else if (simbol < 0.88) {
            simbol10 = 'c';
        } else if (simbol < 0.92) {
            simbol10 = 'v';
        } else if (simbol < 0.96) {
            simbol10 = 'b';
        } else if (simbol < 1) {
            simbol10 = 'n';
        }
    }
}

function s11() {
    typeSimbol();
    if (type === 'number') {
        simbol11 = Math.round((Math.random()) * 10) - 1;
        if (simbol11 < 0) {
            simbol11 = 0;
        }
    } else if (type === 'special simbol') {
        simbol = Math.random();
        if (simbol < 0.1) {
            simbol11 = '%';
        } else if (simbol < 0.2) {
            simbol11 = '*';
        } else if (simbol < 0.3) {
            simbol11 = '&';
        } else if (simbol < 0.4) {
            simbol11 = '(';
        } else if (simbol < 0.5) {
            simbol11 = ')';
        } else if (simbol < 0.6) {
            simbol11 = '-';
        } else if (simbol < 0.7) {
            simbol11 = '=';
        } else if (simbol < 0.8) {
            simbol11 = '+';
        } else if (simbol < 0.9) {
            simbol11 = '/';
        } else if (simbol < 1) {
            simbol11 = ';';
        }
    } else if (type === 'letter') {
        simbol = Math.random();
        if (simbol < 0.04) {
            simbol11 = 'q';
        } else if (simbol < 0.08) {
            simbol11 = 'w';
        } else if (simbol < 0.12) {
            simbol11 = 'e';
        } else if (simbol < 0.16) {
            simbol11 = 'r';
        } else if (simbol < 0.2) {
            simbol11 = 't';
        } else if (simbol < 0.24) {
            simbol11 = 'y';
        } else if (simbol < 0.28) {
            simbol11 = 'u';
        } else if (simbol < 0.32) {
            simbol11 = 'i';
        } else if (simbol < 0.36) {
            simbol11 = 'o';
        } else if (simbol < 0.4) {
            simbol11 = 'p';
        } else if (simbol < 0.44) {
            simbol11 = 'a';
        } else if (simbol < 0.48) {
            simbol11 = 's';
        } else if (simbol < 0.52) {
            simbol11 = 'd';
        } else if (simbol < 0.56) {
            simbol11 = 'f';
        } else if (simbol < 0.6) {
            simbol11 = 'g';
        } else if (simbol < 0.64) {
            simbol11 = 'h';
        } else if (simbol < 0.68) {
            simbol11 = 'j';
        } else if (simbol < 0.72) {
            simbol11 = 'k';
        } else if (simbol < 0.76) {
            simbol11 = 'l';
        } else if (simbol < 0.8) {
            simbol11 = 'z';
        } else if (simbol < 0.84) {
            simbol11 = 'x';
        } else if (simbol < 0.88) {
            simbol11 = 'c';
        } else if (simbol < 0.92) {
            simbol11 = 'v';
        } else if (simbol < 0.96) {
            simbol11 = 'b';
        } else if (simbol < 1) {
            simbol11 = 'n';
        }
    }
}

function s12() {
    typeSimbol();
    if (type === 'number') {
        simbol12 = Math.round((Math.random()) * 10) - 1;
        if (simbol12 < 0) {
            simbol12 = 0;
        }
    } else if (type === 'special simbol') {
        simbol = Math.random();
        if (simbol < 0.1) {
            simbol12 = '%';
        } else if (simbol < 0.2) {
            simbol12 = '*';
        } else if (simbol < 0.3) {
            simbol12 = '&';
        } else if (simbol < 0.4) {
            simbol12 = '(';
        } else if (simbol < 0.5) {
            simbol12 = ')';
        } else if (simbol < 0.6) {
            simbol12 = '-';
        } else if (simbol < 0.7) {
            simbol12 = '=';
        } else if (simbol < 0.8) {
            simbol12 = '+';
        } else if (simbol < 0.9) {
            simbol12 = '/';
        } else if (simbol < 1) {
            simbol12 = ';';
        }
    } else if (type === 'letter') {
        simbol = Math.random();
        if (simbol < 0.04) {
            simbol12 = 'q';
        } else if (simbol < 0.08) {
            simbol12 = 'w';
        } else if (simbol < 0.12) {
            simbol12 = 'e';
        } else if (simbol < 0.16) {
            simbol12 = 'r';
        } else if (simbol < 0.2) {
            simbol12 = 't';
        } else if (simbol < 0.24) {
            simbol12 = 'y';
        } else if (simbol < 0.28) {
            simbol12 = 'u';
        } else if (simbol < 0.32) {
            simbol12 = 'i';
        } else if (simbol < 0.36) {
            simbol12 = 'o';
        } else if (simbol < 0.4) {
            simbol12 = 'p';
        } else if (simbol < 0.44) {
            simbol12 = 'a';
        } else if (simbol < 0.48) {
            simbol12 = 's';
        } else if (simbol < 0.52) {
            simbol12 = 'd';
        } else if (simbol < 0.56) {
            simbol12 = 'f';
        } else if (simbol < 0.6) {
            simbol12 = 'g';
        } else if (simbol < 0.64) {
            simbol12 = 'h';
        } else if (simbol < 0.68) {
            simbol12 = 'j';
        } else if (simbol < 0.72) {
            simbol12 = 'k';
        } else if (simbol < 0.76) {
            simbol12 = 'l';
        } else if (simbol < 0.8) {
            simbol12 = 'z';
        } else if (simbol < 0.84) {
            simbol12 = 'x';
        } else if (simbol < 0.88) {
            simbol12 = 'c';
        } else if (simbol < 0.92) {
            simbol12 = 'v';
        } else if (simbol < 0.96) {
            simbol12 = 'b';
        } else if (simbol < 1) {
            simbol12 = 'n';
        }
    }
}

function s13() {
    typeSimbol();
    if (type === 'number') {
        simbol13 = Math.round((Math.random()) * 10) - 1;
        if (simbol13 < 0) {
            simbol13 = 0;
        }
    } else if (type === 'special simbol') {
        simbol = Math.random();
        if (simbol < 0.1) {
            simbol13 = '%';
        } else if (simbol < 0.2) {
            simbol13 = '*';
        } else if (simbol < 0.3) {
            simbol13 = '&';
        } else if (simbol < 0.4) {
            simbol13 = '(';
        } else if (simbol < 0.5) {
            simbol13 = ')';
        } else if (simbol < 0.6) {
            simbol13 = '-';
        } else if (simbol < 0.7) {
            simbol13 = '=';
        } else if (simbol < 0.8) {
            simbol13 = '+';
        } else if (simbol < 0.9) {
            simbol13 = '/';
        } else if (simbol < 1) {
            simbol13 = ';';
        }
    } else if (type === 'letter') {
        simbol = Math.random();
        if (simbol < 0.04) {
            simbol13 = 'q';
        } else if (simbol < 0.08) {
            simbol13 = 'w';
        } else if (simbol < 0.12) {
            simbol13 = 'e';
        } else if (simbol < 0.16) {
            simbol13 = 'r';
        } else if (simbol < 0.2) {
            simbol13 = 't';
        } else if (simbol < 0.24) {
            simbol13 = 'y';
        } else if (simbol < 0.28) {
            simbol13 = 'u';
        } else if (simbol < 0.32) {
            simbol13 = 'i';
        } else if (simbol < 0.36) {
            simbol13 = 'o';
        } else if (simbol < 0.4) {
            simbol13 = 'p';
        } else if (simbol < 0.44) {
            simbol13 = 'a';
        } else if (simbol < 0.48) {
            simbol13 = 's';
        } else if (simbol < 0.52) {
            simbol13 = 'd';
        } else if (simbol < 0.56) {
            simbol13 = 'f';
        } else if (simbol < 0.6) {
            simbol13 = 'g';
        } else if (simbol < 0.64) {
            simbol13 = 'h';
        } else if (simbol < 0.68) {
            simbol13 = 'j';
        } else if (simbol < 0.72) {
            simbol13 = 'k';
        } else if (simbol < 0.76) {
            simbol13 = 'l';
        } else if (simbol < 0.8) {
            simbol13 = 'z';
        } else if (simbol < 0.84) {
            simbol13 = 'x';
        } else if (simbol < 0.88) {
            simbol13 = 'c';
        } else if (simbol < 0.92) {
            simbol13 = 'v';
        } else if (simbol < 0.96) {
            simbol13 = 'b';
        } else if (simbol < 1) {
            simbol13 = 'n';
        }
    }
}

function s14() {
    typeSimbol();
    if (type === 'number') {
        simbol14 = Math.round((Math.random()) * 10) - 1;
        if (simbol14 < 0) {
            simbol14 = 0;
        }
    } else if (type === 'special simbol') {
        simbol = Math.random();
        if (simbol < 0.1) {
            simbol14 = '%';
        } else if (simbol < 0.2) {
            simbol14 = '*';
        } else if (simbol < 0.3) {
            simbol14 = '&';
        } else if (simbol < 0.4) {
            simbol14 = '(';
        } else if (simbol < 0.5) {
            simbol14 = ')';
        } else if (simbol < 0.6) {
            simbol14 = '-';
        } else if (simbol < 0.7) {
            simbol14 = '=';
        } else if (simbol < 0.8) {
            simbol14 = '+';
        } else if (simbol < 0.9) {
            simbol14 = '/';
        } else if (simbol < 1) {
            simbol14 = ';';
        }
    } else if (type === 'letter') {
        simbol = Math.random();
        if (simbol < 0.04) {
            simbol14 = 'q';
        } else if (simbol < 0.08) {
            simbol14 = 'w';
        } else if (simbol < 0.12) {
            simbol14 = 'e';
        } else if (simbol < 0.16) {
            simbol14 = 'r';
        } else if (simbol < 0.2) {
            simbol14 = 't';
        } else if (simbol < 0.24) {
            simbol14 = 'y';
        } else if (simbol < 0.28) {
            simbol14 = 'u';
        } else if (simbol < 0.32) {
            simbol14 = 'i';
        } else if (simbol < 0.36) {
            simbol14 = 'o';
        } else if (simbol < 0.4) {
            simbol14 = 'p';
        } else if (simbol < 0.44) {
            simbol14 = 'a';
        } else if (simbol < 0.48) {
            simbol14 = 's';
        } else if (simbol < 0.52) {
            simbol14 = 'd';
        } else if (simbol < 0.56) {
            simbol14 = 'f';
        } else if (simbol < 0.6) {
            simbol14 = 'g';
        } else if (simbol < 0.64) {
            simbol14 = 'h';
        } else if (simbol < 0.68) {
            simbol14 = 'j';
        } else if (simbol < 0.72) {
            simbol14 = 'k';
        } else if (simbol < 0.76) {
            simbol14 = 'l';
        } else if (simbol < 0.8) {
            simbol14 = 'z';
        } else if (simbol < 0.84) {
            simbol14 = 'x';
        } else if (simbol < 0.88) {
            simbol14 = 'c';
        } else if (simbol < 0.92) {
            simbol14 = 'v';
        } else if (simbol < 0.96) {
            simbol14 = 'b';
        } else if (simbol < 1) {
            simbol14 = 'n';
        }
    }
}

function s15() {
    typeSimbol();
    if (type === 'number') {
        simbol15 = Math.round((Math.random()) * 10) - 1;
        if (simbol15 < 0) {
            simbol15 = 0;
        }
    } else if (type === 'special simbol') {
        simbol = Math.random();
        if (simbol < 0.1) {
            simbol15 = '%';
        } else if (simbol < 0.2) {
            simbol15 = '*';
        } else if (simbol < 0.3) {
            simbol15 = '&';
        } else if (simbol < 0.4) {
            simbol15 = '(';
        } else if (simbol < 0.5) {
            simbol15 = ')';
        } else if (simbol < 0.6) {
            simbol15 = '-';
        } else if (simbol < 0.7) {
            simbol15 = '=';
        } else if (simbol < 0.8) {
            simbol15 = '+';
        } else if (simbol < 0.9) {
            simbol15 = '/';
        } else if (simbol < 1) {
            simbol15 = ';';
        }
    } else if (type === 'letter') {
        simbol = Math.random();
        if (simbol < 0.04) {
            simbol15 = 'q';
        } else if (simbol < 0.08) {
            simbol15 = 'w';
        } else if (simbol < 0.12) {
            simbol15 = 'e';
        } else if (simbol < 0.16) {
            simbol15 = 'r';
        } else if (simbol < 0.2) {
            simbol15 = 't';
        } else if (simbol < 0.24) {
            simbol15 = 'y';
        } else if (simbol < 0.28) {
            simbol15 = 'u';
        } else if (simbol < 0.32) {
            simbol15 = 'i';
        } else if (simbol < 0.36) {
            simbol15 = 'o';
        } else if (simbol < 0.4) {
            simbol15 = 'p';
        } else if (simbol < 0.44) {
            simbol15 = 'a';
        } else if (simbol < 0.48) {
            simbol15 = 's';
        } else if (simbol < 0.52) {
            simbol15 = 'd';
        } else if (simbol < 0.56) {
            simbol15 = 'f';
        } else if (simbol < 0.6) {
            simbol15 = 'g';
        } else if (simbol < 0.64) {
            simbol15 = 'h';
        } else if (simbol < 0.68) {
            simbol15 = 'j';
        } else if (simbol < 0.72) {
            simbol15 = 'k';
        } else if (simbol < 0.76) {
            simbol15 = 'l';
        } else if (simbol < 0.8) {
            simbol15 = 'z';
        } else if (simbol < 0.84) {
            simbol15 = 'x';
        } else if (simbol < 0.88) {
            simbol15 = 'c';
        } else if (simbol < 0.92) {
            simbol15 = 'v';
        } else if (simbol < 0.96) {
            simbol15 = 'b';
        } else if (simbol < 1) {
            simbol15 = 'n';
        }
    }
}

function s16() {
    typeSimbol();
    if (type === 'number') {
        simbol16 = Math.round((Math.random()) * 10) - 1;
        if (simbol16 < 0) {
            simbol16 = 0;
        }
    } else if (type === 'special simbol') {
        simbol = Math.random();
        if (simbol < 0.1) {
            simbol16 = '%';
        } else if (simbol < 0.2) {
            simbol16 = '*';
        } else if (simbol < 0.3) {
            simbol16 = '&';
        } else if (simbol < 0.4) {
            simbol16 = '(';
        } else if (simbol < 0.5) {
            simbol16 = ')';
        } else if (simbol < 0.6) {
            simbol16 = '-';
        } else if (simbol < 0.7) {
            simbol16 = '=';
        } else if (simbol < 0.8) {
            simbol16 = '+';
        } else if (simbol < 0.9) {
            simbol16 = '/';
        } else if (simbol < 1) {
            simbol16 = ';';
        }
    } else if (type === 'letter') {
        simbol = Math.random();
        if (simbol < 0.04) {
            simbol16 = 'q';
        } else if (simbol < 0.08) {
            simbol16 = 'w';
        } else if (simbol < 0.12) {
            simbol16 = 'e';
        } else if (simbol < 0.16) {
            simbol16 = 'r';
        } else if (simbol < 0.2) {
            simbol16 = 't';
        } else if (simbol < 0.24) {
            simbol16 = 'y';
        } else if (simbol < 0.28) {
            simbol16 = 'u';
        } else if (simbol < 0.32) {
            simbol16 = 'i';
        } else if (simbol < 0.36) {
            simbol16 = 'o';
        } else if (simbol < 0.4) {
            simbol16 = 'p';
        } else if (simbol < 0.44) {
            simbol16 = 'a';
        } else if (simbol < 0.48) {
            simbol16 = 's';
        } else if (simbol < 0.52) {
            simbol16 = 'd';
        } else if (simbol < 0.56) {
            simbol16 = 'f';
        } else if (simbol < 0.6) {
            simbol16 = 'g';
        } else if (simbol < 0.64) {
            simbol16 = 'h';
        } else if (simbol < 0.68) {
            simbol16 = 'j';
        } else if (simbol < 0.72) {
            simbol16 = 'k';
        } else if (simbol < 0.76) {
            simbol16 = 'l';
        } else if (simbol < 0.8) {
            simbol16 = 'z';
        } else if (simbol < 0.84) {
            simbol16 = 'x';
        } else if (simbol < 0.88) {
            simbol16 = 'c';
        } else if (simbol < 0.92) {
            simbol16 = 'v';
        } else if (simbol < 0.96) {
            simbol16 = 'b';
        } else if (simbol < 1) {
            simbol16 = 'n';
        }
    }
}

function s17() {
    typeSimbol();
    if (type === 'number') {
        simbol17 = Math.round((Math.random()) * 10) - 1;
        if (simbol17 < 0) {
            simbol17 = 0;
        }
    } else if (type === 'special simbol') {
        simbol = Math.random();
        if (simbol < 0.1) {
            simbol17 = '%';
        } else if (simbol < 0.2) {
            simbol17 = '*';
        } else if (simbol < 0.3) {
            simbol17 = '&';
        } else if (simbol < 0.4) {
            simbol17 = '(';
        } else if (simbol < 0.5) {
            simbol17 = ')';
        } else if (simbol < 0.6) {
            simbol17 = '-';
        } else if (simbol < 0.7) {
            simbol17 = '=';
        } else if (simbol < 0.8) {
            simbol17 = '+';
        } else if (simbol < 0.9) {
            simbol17 = '/';
        } else if (simbol < 1) {
            simbol17 = ';';
        }
    } else if (type === 'letter') {
        simbol = Math.random();
        if (simbol < 0.04) {
            simbol17 = 'q';
        } else if (simbol < 0.08) {
            simbol17 = 'w';
        } else if (simbol < 0.12) {
            simbol17 = 'e';
        } else if (simbol < 0.16) {
            simbol17 = 'r';
        } else if (simbol < 0.2) {
            simbol17 = 't';
        } else if (simbol < 0.24) {
            simbol17 = 'y';
        } else if (simbol < 0.28) {
            simbol17 = 'u';
        } else if (simbol < 0.32) {
            simbol17 = 'i';
        } else if (simbol < 0.36) {
            simbol17 = 'o';
        } else if (simbol < 0.4) {
            simbol17 = 'p';
        } else if (simbol < 0.44) {
            simbol17 = 'a';
        } else if (simbol < 0.48) {
            simbol17 = 's';
        } else if (simbol < 0.52) {
            simbol17 = 'd';
        } else if (simbol < 0.56) {
            simbol17 = 'f';
        } else if (simbol < 0.6) {
            simbol17 = 'g';
        } else if (simbol < 0.64) {
            simbol17 = 'h';
        } else if (simbol < 0.68) {
            simbol17 = 'j';
        } else if (simbol < 0.72) {
            simbol17 = 'k';
        } else if (simbol < 0.76) {
            simbol17 = 'l';
        } else if (simbol < 0.8) {
            simbol17 = 'z';
        } else if (simbol < 0.84) {
            simbol17 = 'x';
        } else if (simbol < 0.88) {
            simbol17 = 'c';
        } else if (simbol < 0.92) {
            simbol17 = 'v';
        } else if (simbol < 0.96) {
            simbol17 = 'b';
        } else if (simbol < 1) {
            simbol17 = 'n';
        }
    }
}

function s18() {
    typeSimbol();
    if (type === 'number') {
        simbol18 = Math.round((Math.random()) * 10) - 1;
        if (simbol18 < 0) {
            simbol18 = 0;
        }
    } else if (type === 'special simbol') {
        simbol = Math.random();
        if (simbol < 0.1) {
            simbol18 = '%';
        } else if (simbol < 0.2) {
            simbol18 = '*';
        } else if (simbol < 0.3) {
            simbol18 = '&';
        } else if (simbol < 0.4) {
            simbol18 = '(';
        } else if (simbol < 0.5) {
            simbol18 = ')';
        } else if (simbol < 0.6) {
            simbol18 = '-';
        } else if (simbol < 0.7) {
            simbol18 = '=';
        } else if (simbol < 0.8) {
            simbol18 = '+';
        } else if (simbol < 0.9) {
            simbol18 = '/';
        } else if (simbol < 1) {
            simbol18 = ';';
        }
    } else if (type === 'letter') {
        simbol = Math.random();
        if (simbol < 0.04) {
            simbol18 = 'q';
        } else if (simbol < 0.08) {
            simbol18 = 'w';
        } else if (simbol < 0.12) {
            simbol18 = 'e';
        } else if (simbol < 0.16) {
            simbol18 = 'r';
        } else if (simbol < 0.2) {
            simbol18 = 't';
        } else if (simbol < 0.24) {
            simbol18 = 'y';
        } else if (simbol < 0.28) {
            simbol18 = 'u';
        } else if (simbol < 0.32) {
            simbol18 = 'i';
        } else if (simbol < 0.36) {
            simbol18 = 'o';
        } else if (simbol < 0.4) {
            simbol18 = 'p';
        } else if (simbol < 0.44) {
            simbol18 = 'a';
        } else if (simbol < 0.48) {
            simbol18 = 's';
        } else if (simbol < 0.52) {
            simbol18 = 'd';
        } else if (simbol < 0.56) {
            simbol18 = 'f';
        } else if (simbol < 0.6) {
            simbol18 = 'g';
        } else if (simbol < 0.64) {
            simbol18 = 'h';
        } else if (simbol < 0.68) {
            simbol18 = 'j';
        } else if (simbol < 0.72) {
            simbol18 = 'k';
        } else if (simbol < 0.76) {
            simbol18 = 'l';
        } else if (simbol < 0.8) {
            simbol18 = 'z';
        } else if (simbol < 0.84) {
            simbol18 = 'x';
        } else if (simbol < 0.88) {
            simbol18 = 'c';
        } else if (simbol < 0.92) {
            simbol18 = 'v';
        } else if (simbol < 0.96) {
            simbol18 = 'b';
        } else if (simbol < 1) {
            simbol18 = 'n';
        }
    }
}

function s19() {
    typeSimbol();
    if (type === 'number') {
        simbol19 = Math.round((Math.random()) * 10) - 1;
        if (simbol19 < 0) {
            simbol19 = 0;
        }
    } else if (type === 'special simbol') {
        simbol = Math.random();
        if (simbol < 0.1) {
            simbol19 = '%';
        } else if (simbol < 0.2) {
            simbol19 = '*';
        } else if (simbol < 0.3) {
            simbol19 = '&';
        } else if (simbol < 0.4) {
            simbol19 = '(';
        } else if (simbol < 0.5) {
            simbol19 = ')';
        } else if (simbol < 0.6) {
            simbol19 = '-';
        } else if (simbol < 0.7) {
            simbol19 = '=';
        } else if (simbol < 0.8) {
            simbol19 = '+';
        } else if (simbol < 0.9) {
            simbol19 = '/';
        } else if (simbol < 1) {
            simbol19 = ';';
        }
    } else if (type === 'letter') {
        simbol = Math.random();
        if (simbol < 0.04) {
            simbol19 = 'q';
        } else if (simbol < 0.08) {
            simbol19 = 'w';
        } else if (simbol < 0.12) {
            simbol19 = 'e';
        } else if (simbol < 0.16) {
            simbol19 = 'r';
        } else if (simbol < 0.2) {
            simbol19 = 't';
        } else if (simbol < 0.24) {
            simbol19 = 'y';
        } else if (simbol < 0.28) {
            simbol19 = 'u';
        } else if (simbol < 0.32) {
            simbol19 = 'i';
        } else if (simbol < 0.36) {
            simbol19 = 'o';
        } else if (simbol < 0.4) {
            simbol19 = 'p';
        } else if (simbol < 0.44) {
            simbol19 = 'a';
        } else if (simbol < 0.48) {
            simbol19 = 's';
        } else if (simbol < 0.52) {
            simbol19 = 'd';
        } else if (simbol < 0.56) {
            simbol19 = 'f';
        } else if (simbol < 0.6) {
            simbol19 = 'g';
        } else if (simbol < 0.64) {
            simbol19 = 'h';
        } else if (simbol < 0.68) {
            simbol19 = 'j';
        } else if (simbol < 0.72) {
            simbol19 = 'k';
        } else if (simbol < 0.76) {
            simbol19 = 'l';
        } else if (simbol < 0.8) {
            simbol19 = 'z';
        } else if (simbol < 0.84) {
            simbol19 = 'x';
        } else if (simbol < 0.88) {
            simbol19 = 'c';
        } else if (simbol < 0.92) {
            simbol19 = 'v';
        } else if (simbol < 0.96) {
            simbol19 = 'b';
        } else if (simbol < 1) {
            simbol19 = 'n';
        }
    }
}

function s20() {
    typeSimbol();
    if (type === 'number') {
        simbol20 = Math.round((Math.random()) * 10) - 1;
        if (simbol20 < 0) {
            simbol20 = 0;
        }
    } else if (type === 'special simbol') {
        simbol = Math.random();
        if (simbol < 0.1) {
            simbol20 = '%';
        } else if (simbol < 0.2) {
            simbol20 = '*';
        } else if (simbol < 0.3) {
            simbol20 = '&';
        } else if (simbol < 0.4) {
            simbol20 = '(';
        } else if (simbol < 0.5) {
            simbol20 = ')';
        } else if (simbol < 0.6) {
            simbol20 = '-';
        } else if (simbol < 0.7) {
            simbol20 = '=';
        } else if (simbol < 0.8) {
            simbol20 = '+';
        } else if (simbol < 0.9) {
            simbol20 = '/';
        } else if (simbol < 1) {
            simbol20 = ';';
        }
    } else if (type === 'letter') {
        simbol = Math.random();
        if (simbol < 0.04) {
            simbol20 = 'q';
        } else if (simbol < 0.08) {
            simbol20 = 'w';
        } else if (simbol < 0.12) {
            simbol20 = 'e';
        } else if (simbol < 0.16) {
            simbol20 = 'r';
        } else if (simbol < 0.2) {
            simbol20 = 't';
        } else if (simbol < 0.24) {
            simbol20 = 'y';
        } else if (simbol < 0.28) {
            simbol20 = 'u';
        } else if (simbol < 0.32) {
            simbol20 = 'i';
        } else if (simbol < 0.36) {
            simbol20 = 'o';
        } else if (simbol < 0.4) {
            simbol20 = 'p';
        } else if (simbol < 0.44) {
            simbol20 = 'a';
        } else if (simbol < 0.48) {
            simbol20 = 's';
        } else if (simbol < 0.52) {
            simbol20 = 'd';
        } else if (simbol < 0.56) {
            simbol20 = 'f';
        } else if (simbol < 0.6) {
            simbol20 = 'g';
        } else if (simbol < 0.64) {
            simbol20 = 'h';
        } else if (simbol < 0.68) {
            simbol20 = 'j';
        } else if (simbol < 0.72) {
            simbol20 = 'k';
        } else if (simbol < 0.76) {
            simbol20 = 'l';
        } else if (simbol < 0.8) {
            simbol20 = 'z';
        } else if (simbol < 0.84) {
            simbol20 = 'x';
        } else if (simbol < 0.88) {
            simbol20 = 'c';
        } else if (simbol < 0.92) {
            simbol20 = 'v';
        } else if (simbol < 0.96) {
            simbol20 = 'b';
        } else if (simbol < 1) {
            simbol20 = 'n';
        }
    }
}

function four() {
    s1();
    s2();
    s3();
    s4();
    password = simbol1 + '' + simbol2 + '' + simbol3 + '' + simbol4;
    document.getElementById('yourPassword').textContent = 'Ваш пароль: ' + password;
}

function five() {
    s1();
    s2();
    s3();
    s4();
    s5();
    password = simbol1 + '' + simbol2 + '' + simbol3 + '' + simbol4 + '' + simbol5;
    document.getElementById('yourPassword').textContent = 'Ваш пароль: ' +  password;
}

function six() {
    s1();
    s2();
    s3();
    s4();
    s5();
    s6();
    password = simbol1 + '' + simbol2 + '' + simbol3 + '' + simbol4 + '' + simbol5 + '' + simbol6;
    document.getElementById('yourPassword').textContent = 'Ваш пароль: ' +  password;
}

function seven() {
    s1();
    s2();
    s3();
    s4();
    s5();
    s6();
    s7();
    password = simbol1 + '' + simbol2 + '' + simbol3 + '' + simbol4 + '' + simbol5 + '' + simbol6 + '' + simbol7;
    document.getElementById('yourPassword').textContent = 'Ваш пароль: ' +  password;
}

function eight() {
    s1();
    s2();
    s3();
    s4();
    s5();
    s6();
    s7();
    s8();
    password = simbol1 + '' + simbol2 + '' + simbol3 + '' + simbol4 + '' + simbol5 + '' + simbol6 + '' + simbol7 + '' + simbol8;
    document.getElementById('yourPassword').textContent = 'Ваш пароль: ' +  password;
}

function nine() {
    s1();
    s2();
    s3();
    s4();
    s5();
    s6();
    s7();
    s8();
    s9();
    password = simbol1 + '' + simbol2 + '' + simbol3 + '' + simbol4 + '' + simbol5 + '' + simbol6 + '' + simbol7 + '' + simbol8 + '' + simbol9;
    document.getElementById('yourPassword').textContent = 'Ваш пароль: ' +  password;
}

function ten() {
    s1();
    s2();
    s3();
    s4();
    s5();
    s6();
    s7();
    s8();
    s9();
    s10()
    password = simbol1 + '' + simbol2 + '' + simbol3 + '' + simbol4 + '' + simbol5 + '' + simbol6 + '' + simbol7 + '' + simbol8 + '' + simbol9 + '' + simbol10;
    document.getElementById('yourPassword').textContent = 'Ваш пароль: ' +  password;
}

function eleven() {
    s1();
    s2();
    s3();
    s4();
    s5();
    s6();
    s7();
    s8();
    s9();
    s10();
    s11();
    password = simbol1 + '' + simbol2 + '' + simbol3 + '' + simbol4 + '' + simbol5 + '' + simbol6 + '' + simbol7 + '' + simbol8 + '' + simbol9 + '' + simbol10 + '' + simbol11;
    document.getElementById('yourPassword').textContent = 'Ваш пароль: ' +  password;
}

function twelve() {
    s1();
    s2();
    s3();
    s4();
    s5();
    s6();
    s7();
    s8();
    s9();
    s10();
    s11();
    s12();
    password = simbol1 + '' + simbol2 + '' + simbol3 + '' + simbol4 + '' + simbol5 + '' + simbol6 + '' + simbol7 + '' + simbol8 + '' + simbol9 + '' + simbol10 + '' + simbol11 + '' + simbol12;
    document.getElementById('yourPassword').textContent = 'Ваш пароль: ' +  password;
}

function thirteen() {
    s1();
    s2();
    s3();
    s4();
    s5();
    s6();
    s7();
    s8();
    s9();
    s10();
    s11();
    s12();
    s13();
    password = simbol1 + '' + simbol2 + '' + simbol3 + '' + simbol4 + '' + simbol5 + '' + simbol6 + '' + simbol7 + '' + simbol8 + '' + simbol9 + '' + simbol10 + '' + simbol11 + '' + simbol12 + '' + simbol13;
    document.getElementById('yourPassword').textContent = 'Ваш пароль: ' +  password;
}

function fourteen() {
    s1();
    s2();
    s3();
    s4();
    s5();
    s6();
    s7();
    s8();
    s9();
    s10();
    s11();
    s12();
    s13();
    s14();
    password = simbol1 + '' + simbol2 + '' + simbol3 + '' + simbol4 + '' + simbol5 + '' + simbol6 + '' + simbol7 + '' + simbol8 + '' + simbol9 + '' + simbol10 + '' + simbol11 + '' + simbol12 + '' + simbol13 + '' + simbol14;
    document.getElementById('yourPassword').textContent = 'Ваш пароль: ' +  password;
}

function fifteen() {
    s1();
    s2();
    s3();
    s4();
    s5();
    s6();
    s7();
    s8();
    s9();
    s10();
    s11();
    s12();
    s13();
    s14();
    s15();
    password = simbol1 + '' + simbol2 + '' + simbol3 + '' + simbol4 + '' + simbol5 + '' + simbol6 + '' + simbol7 + '' + simbol8 + '' + simbol9 + '' + simbol10 + '' + simbol11 + '' + simbol12 + '' + simbol13 + '' + simbol14 + '' + simbol15;
    document.getElementById('yourPassword').textContent = 'Ваш пароль: ' +  password;
}

function sixteen() {
    s1();
    s2();
    s3();
    s4();
    s5();
    s6();
    s7();
    s8();
    s9();
    s10();
    s11();
    s12();
    s13();
    s14();
    s15();
    s16();
    password = simbol1 + '' + simbol2 + '' + simbol3 + '' + simbol4 + '' + simbol5 + '' + simbol6 + '' + simbol7 + '' + simbol8 + '' + simbol9 + '' + simbol10 + '' + simbol11 + '' + simbol12 + '' + simbol13 + '' + simbol14 + '' + simbol15 + '' + simbol16;
    document.getElementById('yourPassword').textContent = 'Ваш пароль: ' +  password;
}

function seventeen() {
    s1();
    s2();
    s3();
    s4();
    s5();
    s6();
    s7();
    s8();
    s9();
    s10();
    s11();
    s12();
    s13();
    s14();
    s15();
    s16();
    s17();
    password = simbol1 + '' + simbol2 + '' + simbol3 + '' + simbol4 + '' + simbol5 + '' + simbol6 + '' + simbol7 + '' + simbol8 + '' + simbol9 + '' + simbol10 + '' + simbol11 + '' + simbol12 + '' + simbol13 + '' + simbol14 + '' + simbol15 + '' + simbol16 + '' + simbol17;
    document.getElementById('yourPassword').textContent = 'Ваш пароль: ' +  password;
}

function eighteen() {
    s1();
    s2();
    s3();
    s4();
    s5();
    s6();
    s7();
    s8();
    s9();
    s10();
    s11();
    s12();
    s13();
    s14();
    s15();
    s16();
    s17();
    s18();
    password = simbol1 + '' + simbol2 + '' + simbol3 + '' + simbol4 + '' + simbol5 + '' + simbol6 + '' + simbol7 + '' + simbol8 + '' + simbol9 + '' + simbol10 + '' + simbol11 + '' + simbol12 + '' + simbol13 + '' + simbol14 + '' + simbol15 + '' + simbol16 + '' + simbol17 + '' + simbol18;
    document.getElementById('yourPassword').textContent = 'Ваш пароль: ' +  password;
}

function nineteen() {
    s1();
    s2();
    s3();
    s4();
    s5();
    s6();
    s7();
    s8();
    s9();
    s10();
    s11();
    s12();
    s13();
    s14();
    s15();
    s16();
    s17();
    s18();
    s19();
    password = simbol1 + '' + simbol2 + '' + simbol3 + '' + simbol4 + '' + simbol5 + '' + simbol6 + '' + simbol7 + '' + simbol8 + '' + simbol9 + '' + simbol10 + '' + simbol11 + '' + simbol12 + '' + simbol13 + '' + simbol14 + '' + simbol15 + '' + simbol16 + '' + simbol17 + '' + simbol18 + '' + simbol19;
    document.getElementById('yourPassword').textContent = 'Ваш пароль: ' +  password;
}

function twenty() {
    s1();
    s2();
    s3();
    s4();
    s5();
    s6();
    s7();
    s8();
    s9();
    s10();
    s11();
    s12();
    s13();
    s14();
    s15();
    s16();
    s17();
    s18();
    s19();
    s20();
    password = simbol1 + '' + simbol2 + '' + simbol3 + '' + simbol4 + '' + simbol5 + '' + simbol6 + '' + simbol7 + '' + simbol8 + '' + simbol9 + '' + simbol10 + '' + simbol11 + '' + simbol12 + '' + simbol13 + '' + simbol14 + '' + simbol15 + '' + simbol16 + '' + simbol17 + '' + simbol18 + '' + simbol19 + '' + simbol20;
    document.getElementById('yourPassword').textContent = 'Ваш пароль: ' +  password; 
}

function alertPassword() {
    let action = document.getElementById('textPassword').value;
    if (action == 4) {
        four();
    } else if (action == 5) {
        five();
    } else if (action == 6) {
        six();
    } else if (action == 7) {
        seven();
        alert(password);
    } else if (action == 8) {
        eight();
    } else if (action == 9) {
        nine();
    } else if (action == 10) {
        ten();
    } else if (action == 11) {
        eleven();
    } else if (action == 12) {
        twelve();
    } else if (action == 13) {
        thirteen();
    } else if (action == 14) {
        fourteen();
    } else if (action == 15) {
        fifteen();
    } else if (action == 16) {
        sixteen();
    } else if (action == 17) {
        seventeen();
    } else if (action == 18) {
        eighteen();
    } else if (action == 19) {
        nineteen();
    } else if (action == 20) {
        twenty();
    }
}

// document.getElementById('yourPassword').textContent = 'Ваш пароль: ' + password; 