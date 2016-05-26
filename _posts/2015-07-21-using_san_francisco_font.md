---
layout: post
title: Используем системный шрифт San Franciso на Mac OS
description: >
  Сниппет для использования нового системного шрифта San Franciso из El Capitan и IOS 9.
categories: front-end
tags: >
  привычка разработчика разработчик front end проверяй код перед комитом программиста
social_image: san_francisco/san_francisco.jpg
---

{%
	include media-image.html
	url="san_francisco/san_francisco.jpg"
	caption="San Francisco"
%}

Вместе с выпуском Apple Watch, компания представила новый шрифт <em>San Francisco</em>, который теперь будет использоваться во всей экосистеме Apple. Уже сейчас можно посмотреть на этот шрифт в публичных бетах <a href="/blog/review_ios9_and_osx_el_capitan/">OSX и El Capitan</a>.

<!-- more -->

Какзалось бы, что теперь при просмотре стандартной веб странички, на устройствах Apple будет установлен этот шрифт. Но это не так. Более того, нам даже не поможет следующий код:

~~~css
body {
  font-family: "San Francisco", "Helvetica Neue", "Lucida Grande";
}
~~~

К сожалению, в свежих версиях El Capitan шрифт San Francisco не установлен. Однако это же системный шрифт, как такое возможно?

<figure itemscope itemtype="http://schema.org/ImageObject">
	<img itemprop="contentUrl" alt="Ищем San Francisco в El Capitan" src="/assets/img/san_francisco/all_fonts.png">
	<figcaption itemprop="description">Ищем San Francisco в El Capitan</figcaption>
</figure>

Apple сделал свой новый шрифт приватным в системе, но это не значит что мы не можем до него добраться 😉

## Подключаем San Francisco

Чтобы добраться до системного шрифта, в некоторых браузерах есть значение шрифта <code>-apple-system</code>. В будущем можно будет пользоваться только им, но не сейчас. Чтобы все работало в хроме и остальных браузерах на нужен следующий код:

~~~css
body {
  font-family: system, -apple-system, BlinkMacSystemFont, ".SFNSDisplay-Regular", "Helvetica Neue", "Lucida Grande";
}
~~~

“.SFNSDisplay-Regular” это приватное имя для San Francisco (regular) в текущих бета релизах (это может поменяться в любое время!).

Значение свойства “system” для семейства шрифта сейчас не существует, но возможно в ближайшем будущем, разработчики браузеров добавят его. Думаю это было бы полезно для всех платформ. На андройде Roboto или Noto. Для windows пользователь может сам выбирать шрифт, а мы, пока, не можем знать какой шрифт у него стоит по умолчанию.

Хотя меня не очень радует перспектива использовать шрифт Roboto или какой-то другой, отличный от яблочных. Поэтому я бы убрал <code>system</code>.

Если у вас есть El Capitan или iOS 9, вы можете посмотреть на мой блог, на котором уже стоит San Francisco. Так-же я подготовил небольшое <a href="/demo/san_francisco/">демо</a>.

Подсмотрено у <a href="http://furbo.org/2015/07/09/i-left-my-system-fonts-in-san-francisco/">Craig Hockenberry</a>.

> Обновление от **6 февраля, 2016**.
> Хром теперь поддерживает свое значение `BlinkMacSystemFont`, аналогичное `-apple-system`.
