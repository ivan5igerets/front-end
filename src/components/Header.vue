<template>
    <div class="header">
        <div class="inner-header">
            <div class="logo_container">
                <h1>Bulletin<span>Board</span></h1>
            </div>

            <ul class="navigation">
                <router-link to="/"><li>Главная</li></router-link>
                <router-link to="/personal_area"><li>Личный кабинет</li></router-link>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
* {
	margin: 0;
	padding: 0;
	list-style: none;
	text-decoration: none;
}

.header{
	width: 100%;
	height: 80px;
	display: block;
	background-color: #101010;
}

.inner-header {
	width: 1100px;
	height: 100%;
	display: block;
	margin: 0 auto;
	background-color: #101010;
}

.logo_container {
	height: 100%;
	display: table;
	float: left;
}

.logo_container h1 {
	color: white;
	height: 100%;
	display: table-cell;
	vertical-align: middle;
	font-family: 'Montserrat';
	font-size: 32px;
	font-weight: 200;
}

.logo_container h1 span {
	font-weight: 800;
}

.navigation {
	float: right;
	height: 100%;
}

.navigation a {
	height: 100%;
	display: table;
	float: left;
	padding: 0px 20px;
}

.navigation a li {
	display: table-cell;
	vertical-align: middle;
	height: 100%;
	color: white;
	font-family: 'Montserrat';
	font-size: 15px;
  	transition: .2s;
}
.navigation a li:hover {
  color: gold;
}
</style>