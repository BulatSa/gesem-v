<?php include('header.php'); ?>


<section class="s-page-header">
	<div class="container">
		<h1 class="h1">Услуги</h1>
		<p class="lead-big">Мы работаем напрямую с производителями запасных частей, комплектующих и оборудования. За счет этого имеем возможность устанавливать специальные цены. Также благодаря своим партнерам беремся за следующие задачи: установка GPS систем и систем контроля расхода топлива, покраска спецтехники и подбор масла.</p>
	</div>
</section>


<section class="s-services">
	<div class="container-wide">
		<div class="row row--bg services-wall">

			<div class="grid-6 grid-6_m grid-12_xs">
				<a href="/project-detail.php" class="service-panel">
					<div class="service-panel__bg" style="background-image: url('/img/services/root-1.jpg')"></div>
					<div class="service-panel__content">
						<div class="service-panel__cat">Услуги</div>
						<div class="h2 service-panel__title">Установка<br>дополнительных<br>систем</div>
						<div class="service-panel__more">подробнее</div>
					</div>
				</a>
			</div>

			<div class="grid-6 grid-6_m grid-12_xs">
				<a href="/project-detail.php" class="service-panel">
					<div class="service-panel__bg" style="background-image: url('/img/services/root-2.jpg')"></div>
					<div class="service-panel__content">
						<div class="service-panel__cat">Услуги</div>
						<div class="h2 service-panel__title">Обслуживание</div>
						<div class="service-panel__more">подробнее</div>
					</div>
				</a>
			</div>
		</div>

	</div>
</section>


<section class="s-order">
	<div class="container">

		<div class="order-block">
			<p class="h3 order-block__title">Индивидуальная смета</p>
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


<section class="s-footimg s-footimg--services-root">
	<img src="/img/services/foot-root.jpg" alt="1">
</section>


<?php include('footer.php'); ?>