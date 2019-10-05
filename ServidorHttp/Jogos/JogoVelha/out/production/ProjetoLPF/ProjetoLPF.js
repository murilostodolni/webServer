if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'ProjetoLPF'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'ProjetoLPF'.");
}
var ProjetoLPF = function (_, Kotlin) {
  'use strict';
  var ensureNotNull = Kotlin.ensureNotNull;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var throwCCE = Kotlin.throwCCE;
  var equals = Kotlin.kotlin.text.equals_igcy3c$;
  var asList = Kotlin.org.w3c.dom.asList_kt9thq$;
  function img() {
    return toInt(ensureNotNull(rodadaElemento().textContent)) % 2 === 0 ? '<img class="x" src="img/x.png"/>' : '<img class="circulo" src="img/circulo.png"/>';
  }
  function rodadaElemento() {
    var tmp$;
    return Kotlin.isType(tmp$ = document.getElementById('rod'), HTMLElement) ? tmp$ : throwCCE();
  }
  function rodadaValor() {
    return toInt(ensureNotNull(rodadaElemento().textContent));
  }
  function attRodada(rod, valor) {
    rod.innerHTML = (valor + 1 | 0).toString();
  }
  function checaLinhas$linha1Aux(closure$l) {
    return function () {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12;
      var tmp$_13 = !equals((tmp$_0 = (tmp$ = closure$l[0]) != null ? tmp$.firstElementChild : null) != null ? tmp$_0.className : null, 'branco');
      if (!tmp$_13) {
        tmp$_13 = !equals((tmp$_2 = (tmp$_1 = closure$l[1]) != null ? tmp$_1.firstElementChild : null) != null ? tmp$_2.className : null, 'branco');
      }
      var tmp$_14 = tmp$_13;
      if (!tmp$_14) {
        tmp$_14 = !equals((tmp$_4 = (tmp$_3 = closure$l[2]) != null ? tmp$_3.firstElementChild : null) != null ? tmp$_4.className : null, 'branco');
      }
      if (tmp$_14) {
        return equals((tmp$_6 = (tmp$_5 = closure$l[0]) != null ? tmp$_5.firstElementChild : null) != null ? tmp$_6.className : null, (tmp$_8 = (tmp$_7 = closure$l[1]) != null ? tmp$_7.firstElementChild : null) != null ? tmp$_8.className : null) ? equals((tmp$_10 = (tmp$_9 = closure$l[0]) != null ? tmp$_9.firstElementChild : null) != null ? tmp$_10.className : null, (tmp$_12 = (tmp$_11 = closure$l[2]) != null ? tmp$_11.firstElementChild : null) != null ? tmp$_12.className : null) : false;
      }
       else
        return false;
    };
  }
  function checaLinhas$linha2Aux(closure$l) {
    return function () {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12;
      var tmp$_13 = !equals((tmp$_0 = (tmp$ = closure$l[3]) != null ? tmp$.firstElementChild : null) != null ? tmp$_0.className : null, 'branco');
      if (!tmp$_13) {
        tmp$_13 = !equals((tmp$_2 = (tmp$_1 = closure$l[4]) != null ? tmp$_1.firstElementChild : null) != null ? tmp$_2.className : null, 'branco');
      }
      var tmp$_14 = tmp$_13;
      if (!tmp$_14) {
        tmp$_14 = !equals((tmp$_4 = (tmp$_3 = closure$l[5]) != null ? tmp$_3.firstElementChild : null) != null ? tmp$_4.className : null, 'branco');
      }
      if (tmp$_14) {
        return equals((tmp$_6 = (tmp$_5 = closure$l[3]) != null ? tmp$_5.firstElementChild : null) != null ? tmp$_6.className : null, (tmp$_8 = (tmp$_7 = closure$l[4]) != null ? tmp$_7.firstElementChild : null) != null ? tmp$_8.className : null) ? equals((tmp$_10 = (tmp$_9 = closure$l[3]) != null ? tmp$_9.firstElementChild : null) != null ? tmp$_10.className : null, (tmp$_12 = (tmp$_11 = closure$l[5]) != null ? tmp$_11.firstElementChild : null) != null ? tmp$_12.className : null) : false;
      }
       else
        return false;
    };
  }
  function checaLinhas$linha3Aux(closure$l) {
    return function () {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12;
      var tmp$_13 = !equals((tmp$_0 = (tmp$ = closure$l[6]) != null ? tmp$.firstElementChild : null) != null ? tmp$_0.className : null, 'branco');
      if (!tmp$_13) {
        tmp$_13 = !equals((tmp$_2 = (tmp$_1 = closure$l[7]) != null ? tmp$_1.firstElementChild : null) != null ? tmp$_2.className : null, 'branco');
      }
      var tmp$_14 = tmp$_13;
      if (!tmp$_14) {
        tmp$_14 = !equals((tmp$_4 = (tmp$_3 = closure$l[8]) != null ? tmp$_3.firstElementChild : null) != null ? tmp$_4.className : null, 'branco');
      }
      if (tmp$_14) {
        return equals((tmp$_6 = (tmp$_5 = closure$l[6]) != null ? tmp$_5.firstElementChild : null) != null ? tmp$_6.className : null, (tmp$_8 = (tmp$_7 = closure$l[7]) != null ? tmp$_7.firstElementChild : null) != null ? tmp$_8.className : null) ? equals((tmp$_10 = (tmp$_9 = closure$l[6]) != null ? tmp$_9.firstElementChild : null) != null ? tmp$_10.className : null, (tmp$_12 = (tmp$_11 = closure$l[8]) != null ? tmp$_11.firstElementChild : null) != null ? tmp$_12.className : null) : false;
      }
       else
        return false;
    };
  }
  function checaLinhas() {
    var l = document.getElementsByTagName('td');
    var linha1Aux = checaLinhas$linha1Aux(l);
    var linha2Aux = checaLinhas$linha2Aux(l);
    var linha3Aux = checaLinhas$linha3Aux(l);
    return linha1Aux() || linha2Aux() || linha3Aux();
  }
  function checaColuna$coluna1Aux(closure$l) {
    return function () {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12;
      var tmp$_13 = !equals((tmp$_0 = (tmp$ = closure$l[0]) != null ? tmp$.firstElementChild : null) != null ? tmp$_0.className : null, 'branco');
      if (!tmp$_13) {
        tmp$_13 = !equals((tmp$_2 = (tmp$_1 = closure$l[3]) != null ? tmp$_1.firstElementChild : null) != null ? tmp$_2.className : null, 'branco');
      }
      var tmp$_14 = tmp$_13;
      if (!tmp$_14) {
        tmp$_14 = !equals((tmp$_4 = (tmp$_3 = closure$l[6]) != null ? tmp$_3.firstElementChild : null) != null ? tmp$_4.className : null, 'branco');
      }
      if (tmp$_14) {
        return equals((tmp$_6 = (tmp$_5 = closure$l[0]) != null ? tmp$_5.firstElementChild : null) != null ? tmp$_6.className : null, (tmp$_8 = (tmp$_7 = closure$l[3]) != null ? tmp$_7.firstElementChild : null) != null ? tmp$_8.className : null) ? equals((tmp$_10 = (tmp$_9 = closure$l[0]) != null ? tmp$_9.firstElementChild : null) != null ? tmp$_10.className : null, (tmp$_12 = (tmp$_11 = closure$l[6]) != null ? tmp$_11.firstElementChild : null) != null ? tmp$_12.className : null) : false;
      }
       else
        return false;
    };
  }
  function checaColuna$coluna2Aux(closure$l) {
    return function () {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12;
      var tmp$_13 = !equals((tmp$_0 = (tmp$ = closure$l[1]) != null ? tmp$.firstElementChild : null) != null ? tmp$_0.className : null, 'branco');
      if (!tmp$_13) {
        tmp$_13 = !equals((tmp$_2 = (tmp$_1 = closure$l[4]) != null ? tmp$_1.firstElementChild : null) != null ? tmp$_2.className : null, 'branco');
      }
      var tmp$_14 = tmp$_13;
      if (!tmp$_14) {
        tmp$_14 = !equals((tmp$_4 = (tmp$_3 = closure$l[7]) != null ? tmp$_3.firstElementChild : null) != null ? tmp$_4.className : null, 'branco');
      }
      if (tmp$_14) {
        return equals((tmp$_6 = (tmp$_5 = closure$l[1]) != null ? tmp$_5.firstElementChild : null) != null ? tmp$_6.className : null, (tmp$_8 = (tmp$_7 = closure$l[4]) != null ? tmp$_7.firstElementChild : null) != null ? tmp$_8.className : null) ? equals((tmp$_10 = (tmp$_9 = closure$l[1]) != null ? tmp$_9.firstElementChild : null) != null ? tmp$_10.className : null, (tmp$_12 = (tmp$_11 = closure$l[7]) != null ? tmp$_11.firstElementChild : null) != null ? tmp$_12.className : null) : false;
      }
       else
        return false;
    };
  }
  function checaColuna$coluna3Aux(closure$l) {
    return function () {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12;
      var tmp$_13 = !equals((tmp$_0 = (tmp$ = closure$l[2]) != null ? tmp$.firstElementChild : null) != null ? tmp$_0.className : null, 'branco');
      if (!tmp$_13) {
        tmp$_13 = !equals((tmp$_2 = (tmp$_1 = closure$l[5]) != null ? tmp$_1.firstElementChild : null) != null ? tmp$_2.className : null, 'branco');
      }
      var tmp$_14 = tmp$_13;
      if (!tmp$_14) {
        tmp$_14 = !equals((tmp$_4 = (tmp$_3 = closure$l[8]) != null ? tmp$_3.firstElementChild : null) != null ? tmp$_4.className : null, 'branco');
      }
      if (tmp$_14) {
        return equals((tmp$_6 = (tmp$_5 = closure$l[2]) != null ? tmp$_5.firstElementChild : null) != null ? tmp$_6.className : null, (tmp$_8 = (tmp$_7 = closure$l[5]) != null ? tmp$_7.firstElementChild : null) != null ? tmp$_8.className : null) ? equals((tmp$_10 = (tmp$_9 = closure$l[2]) != null ? tmp$_9.firstElementChild : null) != null ? tmp$_10.className : null, (tmp$_12 = (tmp$_11 = closure$l[8]) != null ? tmp$_11.firstElementChild : null) != null ? tmp$_12.className : null) : false;
      }
       else
        return false;
    };
  }
  function checaColuna() {
    var l = document.getElementsByTagName('td');
    var coluna1Aux = checaColuna$coluna1Aux(l);
    var coluna2Aux = checaColuna$coluna2Aux(l);
    var coluna3Aux = checaColuna$coluna3Aux(l);
    return coluna1Aux() || coluna2Aux() || coluna3Aux();
  }
  function checaDiagonal$diagonal1Aux(closure$l) {
    return function () {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12;
      var tmp$_13 = !equals((tmp$_0 = (tmp$ = closure$l[0]) != null ? tmp$.firstElementChild : null) != null ? tmp$_0.className : null, 'branco');
      if (!tmp$_13) {
        tmp$_13 = !equals((tmp$_2 = (tmp$_1 = closure$l[4]) != null ? tmp$_1.firstElementChild : null) != null ? tmp$_2.className : null, 'branco');
      }
      var tmp$_14 = tmp$_13;
      if (!tmp$_14) {
        tmp$_14 = !equals((tmp$_4 = (tmp$_3 = closure$l[8]) != null ? tmp$_3.firstElementChild : null) != null ? tmp$_4.className : null, 'branco');
      }
      if (tmp$_14) {
        return equals((tmp$_6 = (tmp$_5 = closure$l[0]) != null ? tmp$_5.firstElementChild : null) != null ? tmp$_6.className : null, (tmp$_8 = (tmp$_7 = closure$l[4]) != null ? tmp$_7.firstElementChild : null) != null ? tmp$_8.className : null) ? equals((tmp$_10 = (tmp$_9 = closure$l[0]) != null ? tmp$_9.firstElementChild : null) != null ? tmp$_10.className : null, (tmp$_12 = (tmp$_11 = closure$l[8]) != null ? tmp$_11.firstElementChild : null) != null ? tmp$_12.className : null) : false;
      }
       else
        return false;
    };
  }
  function checaDiagonal$diagonal2Aux(closure$l) {
    return function () {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12;
      var tmp$_13 = !equals((tmp$_0 = (tmp$ = closure$l[6]) != null ? tmp$.firstElementChild : null) != null ? tmp$_0.className : null, 'branco');
      if (!tmp$_13) {
        tmp$_13 = !equals((tmp$_2 = (tmp$_1 = closure$l[4]) != null ? tmp$_1.firstElementChild : null) != null ? tmp$_2.className : null, 'branco');
      }
      var tmp$_14 = tmp$_13;
      if (!tmp$_14) {
        tmp$_14 = !equals((tmp$_4 = (tmp$_3 = closure$l[2]) != null ? tmp$_3.firstElementChild : null) != null ? tmp$_4.className : null, 'branco');
      }
      if (tmp$_14) {
        return equals((tmp$_6 = (tmp$_5 = closure$l[6]) != null ? tmp$_5.firstElementChild : null) != null ? tmp$_6.className : null, (tmp$_8 = (tmp$_7 = closure$l[4]) != null ? tmp$_7.firstElementChild : null) != null ? tmp$_8.className : null) ? equals((tmp$_10 = (tmp$_9 = closure$l[6]) != null ? tmp$_9.firstElementChild : null) != null ? tmp$_10.className : null, (tmp$_12 = (tmp$_11 = closure$l[2]) != null ? tmp$_11.firstElementChild : null) != null ? tmp$_12.className : null) : false;
      }
       else
        return false;
    };
  }
  function checaDiagonal() {
    var l = document.getElementsByTagName('td');
    var diagonal1Aux = checaDiagonal$diagonal1Aux(l);
    var diagonal2Aux = checaDiagonal$diagonal2Aux(l);
    return diagonal1Aux() || diagonal2Aux();
  }
  function tabuleiroCheio() {
    var l = document.getElementsByTagName('td');
    var tmp$;
    tmp$ = asList(l).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0;
      if (equals((tmp$_0 = element.firstElementChild) != null ? tmp$_0.className : null, 'branco'))
        return false;
    }
    return true;
  }
  function checa() {
    return vitoria() || tabuleiroCheio();
  }
  function vitoria() {
    return checaLinhas() || checaColuna() || checaDiagonal();
  }
  function fim() {
    if (vitoria())
      if (rodadaValor() % 2 === 0)
        window.alert('Jogador O venceu!');
      else
        window.alert('Jogador X venceu!');
    else if (tabuleiroCheio()) {
      window.alert('Empate!');
      reinicia();
    }
  }
  function reinicia() {
    var tmp$;
    var e = document.getElementsByTagName('td');
    var tmp$_0;
    tmp$_0 = asList(e).iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      element.innerHTML = '<img class="branco"/>';
    }
    (tmp$ = document.getElementById('rod')) != null ? (tmp$.innerHTML = (0).toString()) : null;
  }
  function update(id) {
    var tmp$, tmp$_0;
    if (!checa()) {
      var e = Kotlin.isType(tmp$ = document.getElementById(id), HTMLTableCellElement) ? tmp$ : throwCCE();
      if (equals((tmp$_0 = e.firstElementChild) != null ? tmp$_0.className : null, 'branco'))
        e.innerHTML = img();
      attRodada(rodadaElemento(), rodadaValor());
      fim();
    }
  }
  function main() {
  }
  _.img = img;
  _.rodadaElemento = rodadaElemento;
  _.rodadaValor = rodadaValor;
  _.attRodada_906ova$ = attRodada;
  _.checaLinhas = checaLinhas;
  _.checaColuna = checaColuna;
  _.checaDiagonal = checaDiagonal;
  _.tabuleiroCheio = tabuleiroCheio;
  _.checa = checa;
  _.vitoria = vitoria;
  _.fim = fim;
  _.reinicia = reinicia;
  _.update = update;
  _.main = main;
  main();
  Kotlin.defineModule('ProjetoLPF', _);
  return _;
}(typeof ProjetoLPF === 'undefined' ? {} : ProjetoLPF, kotlin);
