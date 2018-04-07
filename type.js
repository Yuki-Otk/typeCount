/*
2017/11/01 HumanInterface
type.js
YukiOtake u276041 
*/
var right = new Array();
var left = new Array();
for (i = 0; i < 5; i++) {
  right[i] = new Array();
  left[i] = new Array();
}

left[0][0] = " \0";
left[0][1] = "\0";
left[0][2] = "\0";
left[0][3] = "\0";
left[1][0] = "vVbB\0";
left[1][1] = "fFgG\0";
left[1][2] = "rRtT\0";
left[1][3] = "4$5%\0";
left[2][0] = "cC\0";
left[2][1] = "dD\0";
left[2][2] = "eE\0";
left[2][3] = "3#\0";
left[3][0] = "xX\0";
left[3][1] = "sS\0";
left[3][2] = "wW\0";
left[3][3] = '2"\0';
left[4][0] = "zZ\0";
left[4][1] = "aA\0";
left[4][2] = "qQ\0";
left[4][3] = "1!\t\0";
right[0][0] = " \0";
right[0][1] = "\0";
right[0][2] = "\0";
right[0][3] = "\0";
right[1][0] = "nNmM\0";
right[1][1] = "hHjJ\0";
right[1][2] = "yYuU\0";
right[1][3] = "6&7'\0";
right[2][0] = ",<\0";
right[2][1] = "kK\0";
right[2][2] = "iI\0";
right[2][3] = "8(\0";
right[3][0] = ".>\0";
right[3][1] = "lL\0";
right[3][2] = "oO\0";
right[3][3] = "9)\0";
right[4][0] = "/?\\_\0";
right[4][1] = ";+:*]}\0";
right[4][2] = "pP@`[{\0";
right[4][3] = "0 -=^~\\|\n\0";
finger = new Array();
floor = new Array();

function textJudge() {//入力されたものを成形してid要素に代入
  total = new Array();
  for (i = 0; i < 10; i++) {
    total[i] = new Array();
    for (j = 0; j < 4; j++) {
      total[i][j] = new Array();
      for (k = 0; k < 9; k++) {
        total[i][j][k] = new Array();
        total[i][j][k] = 0;
      }
    }
  }
  for (i = 0; i < 10; i++) {
    finger[i] = 0;
    floor[i] = 0;
  }
  shiftR = 0;
  shiftL = 0;
  str = document.forms.form.input.value;
  byte2 = 0;
  for (i = 0; i < str.length; i++) {
    flag = false;
    //left
    for (j = 0; j < 5; j++) {
      for (k = 0; k < 4; k++) {
        for (n = 0; n < left[j][k].length; n++) {
          if (left[j][k][n] == str[i]) {
            flag = true;
            finger[j]++;
            if (str[i] != " ") {
              floor[k + 1]++;
            }
            total[j][k][n]++;
            if ((n + 2) % 2 == 1) {
              finger[9]++;
              shiftR++;
            }
            break;
          }
        }
        if (flag) {
          break;
        }
      }
      if (flag) {
        break;
      }
    }
    //right
    for (j = 0; j < 5; j++) {
      if (flag) {
        break;
      }
      for (k = 0; k < 4; k++) {
        for (n = 0; n < right[j][k].length; n++) {
          if (right[j][k][n] == str[i]) {
            flag = true;
            finger[j + 5]++;
            total[j + 5][k][n]++;
            floor[k + 1 + 5]++;
            if (n % 2 == 1) {
              finger[4]++;
              shiftL++;
            }
            break;
          }
        }
        if (flag) {
          break;
        }
      }
      if (flag) {
        break;
      }
    }
    if (!flag) { //2 byte抽出
      byte2++;
    }
  }
  rightCount = 0;
  leftCount = 0;
  floorRcount = 0;
  floorLcount = 0;
  strLength = shiftL + shiftR + str.length - byte2;
  floor[1] = shiftL + floor[1];
  floor[6] = shiftR + floor[6];
  fingerSum = 0;
  floorSum = 0;
  for (i = 1; i <= 10; i++) {
    j = i - 5;
    if (i == 1) {
      finger[i - 1] = finger[0] / 2;
      floor[i - 1] = finger[i - 1];
    }
    if (j == 1) {
      finger[i - 1] = finger[0];
      floor[i - 1] = finger[0];
    }
    fingerPar = (finger[i - 1] / strLength * 100).toFixed([1]);
    floorPar = (floor[i - 1] / strLength * 100).toFixed([1]);
    if (i <= 5) {
      leftCount = leftCount + finger[i - 1];
      floorLcount = floorLcount + floor[i - 1];
      document.getElementById("l" + i).innerText = finger[i - 1] + "回/" + fingerPar + "%";
      document.getElementById("floorL" + i).innerText = floor[i - 1] + "回/" + floorPar + "%";

    } else {
      rightCount = rightCount + finger[i - 1];
      floorRcount = floorRcount + floor[i - 1];
      document.getElementById("r" + j).innerText = finger[i - 1] + "回/" + fingerPar + "%";
      document.getElementById("floorR" + j).innerText = floor[i - 1] + "回/" + floorPar + "%";
      hoge = finger[i - 1] + finger[j - 1];
      fingerSum = hoge + fingerSum;
      document.getElementById('fingerSum' + j).innerText = hoge + "回/" + (hoge / strLength * 100).toFixed([1]) + "%";
      hoge = floor[i - 1] + floor[j - 1];
      floorSum = hoge + floorSum;
      document.getElementById('floorSum' + j).innerText = hoge + "回/" + (hoge / strLength * 100).toFixed([1]) + "%";
    }
  }
  document.getElementById("r").innerText = "右手(" + rightCount + "回/" + (rightCount / strLength * 100).toFixed([1]) + "%)";
  document.getElementById("l").innerText = "左手(" + leftCount + "回/" + (leftCount / strLength * 100).toFixed([1]) + "%)";
  document.getElementById("floorR").innerText = "右手(" + floorRcount + "回/" + (floorRcount / strLength * 100).toFixed([1]) + "%)";
  document.getElementById("floorL").innerText = "左手(" + floorLcount + "回/" + (floorLcount / strLength * 100).toFixed([1]) + "%)";
  document.getElementById("fingerSum").innerText = "合計(" + fingerSum + "回)";
  document.getElementById("floorSum").innerText = "合計(" + floorSum + "回)";
  drawChartFinger();//googleAPIを使用して円グラフを描写(各指のタイプ数)
  drawChartFloor();//googleAPIを使用して円グラフを描写(各段数のタイプ数)
}

function drawChartFinger() {//googleAPIを使用して円グラフを描写(各指のタイプ数)
  var data = google.visualization.arrayToDataTable([
    ["指", "回数"],
    ["右小指", finger[9]],
    ["右薬指", finger[8]],
    ["右中指", finger[7]],
    ["右人差し指", finger[6]],
    ["右親指", finger[5]],
    ["左親指", finger[0]],
    ["左人差し指", finger[1]],
    ["左中指", finger[2]],
    ["左薬指", finger[3]],
    ["左小指", finger[4]]
  ]);
  var options = {
    title: "実行結果",
    is3D: true,
    colors: [
      "#006400",
      "#008000",
      "#2e8b57",
      "#3cb371",
      "#66cdaa",
      "#87cefa",
      "#00bfff",
      "#6495ed",
      "#1e90ff",
      "#0000ff"
    ]
  };
  var chart = new google.visualization.PieChart(
    document.getElementById("fingerChart")
  );
  chart.draw(data, options);
}

function drawChartFloor() {//googleAPIを使用して円グラフを描写(各段数のタイプ数)
  var data = google.visualization.arrayToDataTable([
    ["段数", "回数"],
    ["右5段", floor[9]],
    ["右4段", floor[8]],
    ["右3段", floor[7]],
    ["右2段", floor[6]],
    ["右1段", floor[5]],
    ["左1段", floor[0]],
    ["左2段", floor[1]],
    ["左3段", floor[2]],
    ["左4段", floor[3]],
    ["左5段", floor[4]]
  ]);
  var options = {
    title: "実行結果",
    is3D: true,
    colors: [
      "#006400",
      "#008000",
      "#2e8b57",
      "#3cb371",
      "#66cdaa",
      "#87cefa",
      "#00bfff",
      "#6495ed",
      "#1e90ff",
      "#0000ff"
    ]
  };
  var chart = new google.visualization.PieChart(
    document.getElementById("floorChart")
  );
  chart.draw(data, options);
}