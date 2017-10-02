'use strict'
/*
1) У вас есть большой текст, в котором для обозначения
диалогов используются одинарные кавычки.
Придумать шаблон, который меняет одинарные
кавычки на двойные.
2) Улучшить шаблон таким образом, чтобы конструкции типа
 aren’t не меняли одинарную кавычку на двойную.
3) Создать форму обратной связи с полями:
 Имя, Телефон, e-mail, текст, кнопка «Отправить».

- При нажатии на кнопку «Отправить» произвести
	 валидацию полей следующим образом:
- Имя содержит только буквы;
- Телефон подчиняется шаблону +7(000)000-0000;
- E-mail выглядит как mymail@mail.ru, или my.mail@mail.ru,
	 или my-mail@mail.ru
- Текст произвольный;
- В случае не прохождения валидации одним из полей 
необходимо выделять это поле красной рамкой и сообщать 
пользователю об ошибке.
*/

////////////////////////////////////////////
// Решение в терминах функции задач 1 и 2 //
///////////////////////////////////////////
'use strict'
function KavichkiReplace(sampleString, patternMatch, patternReplace) {
	let sampleStringResult = sampleString.replace(patternMatch, patternReplace);
	return sampleStringResult;
}

var patternMatch = /\s\'/g,
		patternReplace = ' "',
		sampleString = "to be or not to be, can't 'what' is the question",
		sampleStringResult = KavichkiReplace(sampleString, patternMatch, patternReplace);
	
sampleString = sampleStringResult;
patternMatch = /\'\s/g;
patternReplace = '" ';

sampleStringResult = KavichkiReplace(sampleString, patternMatch, patternReplace);

alert('вот что стало:  ' + sampleStringResult);