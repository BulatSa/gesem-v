<?php include('header.php'); ?>


<section class="s-page-header">
	<div class="container">
		<h1 class="h1">Системы пожаротушения самосвала</h1>
	</div>
</section>


<section class="s-project">
	<div class="container">
		<div class="row">

			<div class="grid-7 grid-12_m">
				<div class="project-slider">
					<img src="/img/projects/slide-thumb.png" data-flickity-lazyload="/img/projects/slide.jpg" alt="slide" class="project-slider__item">
					<img src="/img/projects/slide-thumb.png" data-flickity-lazyload="/img/projects/slide.jpg" alt="slide" class="project-slider__item">
					<img src="/img/projects/slide-thumb.png" data-flickity-lazyload="/img/projects/slide.jpg" alt="slide" class="project-slider__item">
				</div>
				<div class="project-text user-content">
					<h3>Proin sodales pulvinar tempor</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales <a href="#">pulvinar tempor</a>. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.</p>
					<h4>Cum sociis natoque penatibus et magnis dis parturient montes</h4>
					<ul>
						<li>Proin gravida dolor sit</li>
						<li>Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis</li>
						<li>Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci</li>
					</ul>
				</div>
			</div>

			<div class="grid-5 grid-12_m">
				<div class="project-right">

					<div class="project-params">
						<p class="h4 project-params__title">Технические параметры проекта:</p>
						<ul class="project-params__list">
							<li>
								<span class="project-params__name">Техническский параметр:</span>
								<span class="h4 project-params__val">100 000 000</span>
							</li>
							<li>
								<span class="project-params__name">Техническский параметр длинное название:</span>
								<span class="h4 project-params__val">599 600 м<sup>2</sup></span>
							</li>
							<li>
								<span class="project-params__name">Техническский параметр длинное название:</span>
								<span class="h4 project-params__val">100</span>
							</li>
						</ul>
					</div>

					<div class="project-client">
						<p class="h4 project-client__title">Рекомендации клиентов</p>
						<a href="/img/about/sert/1.jpg" class="doc fancy" title="Увеличить">
							<figure class="doc__frame">
								<img src="/img/about/sert/1.jpg" alt="1">
							</figure>
						</a>
						<em class="project-client__quote">Исключитльный подход к работе. Команда профессионалов в руки которых можно доверить тяжелую технику и ее обслуживание!</em>
						<footer class="project-client-footer">
							<div class="project-client-footer__left">
								<div class="project-client__name">Шломо Н. Б.</div>
								<div class="project-client__company">ООО «Полюс»</div>
							</div>
							<div class="project-client-footer__right">
								<img src="/img/clients/3.png" alt="3">
							</div>
						</footer>
					</div>

				</div>
			</div>

		</div>
	</div>
</section>


<section class="s-order">
	<div class="container">

		<div class="order-block">
			<p class="h3 order-block__title">Оставьте заявку</p>
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

<?php include('footer.php'); ?>