<?php include('header.php'); ?>


<section class="s-page-header">
	<div class="container">
		<h1 class="h1">Контакты</h1>
	</div>
</section>


<section class="s-contacts">

	<div class="container">
		<nav class="tabs js-contacts-tabs">
			<ul>
				<li class="tabs__link" tabindex="0"><span>Москва</span></li>
				<li class="tabs__link" tabindex="0"><span>Санкт-Петербург</span></li>
				<li class="tabs__link" tabindex="0"><span>Казань</span></li>
			</ul>
		</nav>
	</div>


	<div class="contacts-wrapper">

		<div class="cities-block">
			<img src="/img/lines.svg" alt="lines" class="cities-block__lines">

			<div class="cities-wrapper">
				<div class="city">
					<div class="h2">Москва</div>
					<address class="h4">пр. Одоевского Невского Крупского д. 2А квартира 655</address>
					<div class="city__info">
						<i class="i-phone-old"></i>
						<a href="tel:+7 (985) 43–GESEM">+7 (985) 43–GESEM</a>
					</div>
					<div class="city__info">
						<i class="i-phone-old"></i>
						<a href="tel:+7 (985) 434–37–36">+7 (985) 434–37–36</a>
					</div>
					<div class="city__info">
						<i class="i-e-mail-open"></i>
						<a href="mailto:info@gesem.ru">info@gesem.ru</a>
					</div>
					<div class="city__info">
						<i class="i-fax"></i>
						<a href="mailto:info@gesem.ru">+7 (495) 374–82–64</a>
					</div>
				</div>
				<div class="city">
					<div class="h2">Санкт-Петербург</div>
					<address class="h4">пр. Одоевского Невского Крупского д. 2А квартира 655</address>
					<div class="city__info">
						<i class="i-phone-old"></i>
						<a href="tel:+7 (985) 43–GESEM">+7 (985) 43–GESEM</a>
					</div>
					<div class="city__info">
						<i class="i-phone-old"></i>
						<a href="tel:+7 (985) 434–37–36">+7 (985) 434–37–36</a>
					</div>
				</div>
				<div class="city">
					<div class="h2">Казань</div>
					<address class="h4">пр. Одоевского д. 2А</address>
					<div class="city__info">
						<i class="i-phone-old"></i>
						<a href="tel:+7 (985) 43–GESEM">+7 (985) 43–GESEM</a>
					</div>
					<div class="city__info">
						<i class="i-phone-old"></i>
						<a href="tel:+7 (985) 434–37–36">+7 (985) 434–37–36</a>
					</div>
				</div>
			</div>
		</div>

		<div id="map"></div>

	</div>

	<script>
		var locations_from_admin = [
			[55.750723, 37.609387],
			[59.911683, 30.297973],
			[55.786112, 49.125284]
		];
	</script>

	<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAkPgTO8QdC0-DMpiduIS8qBUd9BLWDns0"></script>
</section>


<section class="s-order">
	<div class="container">

		<div class="order-block">
			<p class="h3 order-block__title">Остались вопросы?<strong> – Задайте их нам!</strong></p>
			<p class="order-block__descr">Наши специалисты свяжутся с Вами, узнают детали и подготовят индивидуальную смету для Вашей компании.</p>
			<form class="ajax-form">
				<div class="row">
					<div class="grid-4 grid-12_s">
						<label class="input">
							<input type="text" name="user_name" data-label="Имя пользователя" class="input__text">
							<i class="i-name input__icon"></i>
							<span class="input__label">Введите имя</span>
						</label>
					</div>
					<div class="grid-4 grid-12_s">
						<label class="input">
							<input type="tel" name="user_tel" data-label="Телефон" class="input__text" data-req="true">
							<i class="i-phone input__icon"></i>
							<span class="input__label">Введите телефон*</span>
						</label>
					</div>
					<div class="grid-4 grid-12_s">
						<label class="input">
							<input type="email" name="user_email" data-label="Email" class="input__text" data-req="true">
							<i class="i-e-mail input__icon"></i>
							<span class="input__label">Введите e-mail*</span>
						</label>
					</div>
				</div>

				<label class="input">
					<textarea name="user_email" data-label="Комментарий" class="input__text"></textarea>
					<i class="i-comment input__icon"></i>
					<span class="input__label">Комментарий</span>
				</label>

				<div class="order-block__footer">
					<label class="style-checkbox">
						<input type="checkbox" name="user_policy" data-label="Согласен с условиями" value="yes" data-req="true" checked="">
						<span>Я соглашаюсь на обработку персональных данных и соглашаюсь с условиями <a href="#">политики конфиденциальности</a></span>
					</label>
					<input type="hidden" value="Новая заявка" name="form_subject">
					<div class="center-content">
						<button type="submit" class="btn btn--orange btn--arrow">Отправить <i class="i-right-ar"></i></button>
					</div>
				</div>

			</form>
		</div>

	</div>
</section>


<section class="s-footimg s-footimg--contacts">
	<img src="/img/contacts/foot.jpg" alt="1">
</section>


<?php include('footer.php'); ?>