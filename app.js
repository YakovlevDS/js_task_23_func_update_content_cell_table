// ? Task: Create a function to update the content of a specific cell of a table

// Solution 1
const changeContent=()=>
{
rowIndex = window.prompt("Input the Row number(0 or 1 or 2) to update the content", "0");
columnIndex = window.prompt("Input the Column number(0 or 1) to update the content","0");
content = window.prompt("Input content");  
  let changeContentCell = document.querySelector('#myTable');
  let indRow = parseInt(rowIndex, 10);
  let indColumn = parseInt(columnIndex, 10);
  let changeContentCellPosition = changeContentCell.rows[indRow].cells[indColumn]
  changeContentCellPosition .innerHTML = content;
}
// ! Explanation: Функция parseInt() принимает строку в качестве аргумента и возвращает целое число в соответствии с указанным основанием системы счисления.
// 10 -десятичная система исчисления.