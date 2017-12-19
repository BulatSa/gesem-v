</main>

<footer class="l-foot">
	<div class="container-wide">
		<div class="l-foot__left">© 2016 – 2017  GESEM</div>
		<div class="l-foot__center"><a href="#" class="link">Политика конфиденциальности</a></div>
		<div class="l-foot__right">Cайт разработан — <a href="https://penbrain.ru" target="_blank" class="link">Pen&Brain</a></div>
	</div>
</footer>

</div><!--site-wrapper END-->



<!-- Модальные окна -->
<div class="modals-sec">

	<div id="modal-smeta" class="modal">
		<p class="h3 modal__title">Индивидуальная смета</p>
		<p class="modal__descr">Наши специалисты свяжутся с&nbsp;Вами, узнают детали и&nbsp;подготовят индивидуальную смету для&nbsp;Вашей компании.</p>
		<form class="ajax-form vertical-form">
			<label class="input">
				<input type="text" name="user_name" data-label="Имя пользователя" class="input__text">
				<i class="i-name input__icon"></i>
				<span class="input__label">Введите имя</span>
			</label>
			<label class="input">
				<input type="tel" name="user_tel" data-label="Телефон" class="input__text" data-req="true">
				<i class="i-phone input__icon"></i>
				<span class="input__label">Введите телефон*</span>
			</label>
			<label class="input">
				<input type="email" name="user_email" data-label="Email" class="input__text" data-req="true">
				<i class="i-e-mail input__icon"></i>
				<span class="input__label">Введите e-mail*</span>
			</label>
			<label class="input">
				<textarea name="user_email" data-label="Комментарий" class="input__text"></textarea>
				<i class="i-comment input__icon"></i>
				<span class="input__label">Комментарий</span>
			</label>
			<label class="style-checkbox">
				<input type="checkbox" name="user_policy" data-label="Согласен с условиями" value="yes" data-req="true" checked="">
				<span>Я соглашаюсь с условиями <a href="#">политики конфиденциальности</a></span>
			</label>
			<input type="hidden" value="Новая заявка" name="form_subject">
			<div class="center-content">
				<button type="submit" class="btn btn--orange btn--arrow">Отправить <i class="i-right-ar"></i></button>
			</div>
		</form>
	</div>

	<div id="modal-thanks" class="modal">
		<p>Спасибо за заявку!</p>
	</div>

	<div id="modal-error" class="modal">
		<p>Что-то пошло не так.</p>
		<p>Скорее всего, мы не получили ваши данные и не сможем связаться с вами.</p>
		<p>Попробуйте еще раз.</p>
		<p>Если постоянно видите эту ошибку, пожалуйста, свяжитесь с нами по телефону или e-email, указанным в контактном разделе.</p>
	</div>

</div>
<!-- Модальные окна -->

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="js/assets.js" type="text/javascript"></script>
<script src="js/main.js" type="text/javascript"></script>

	</body>
</html>
