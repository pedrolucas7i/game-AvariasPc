var init = document.getElementById("init")
var game = document.getElementById("game")
var game2 = document.getElementById("game2")
var pc = document.getElementById("pc")
var pontuacao = document.getElementById("pont")
var error_audio = document.getElementById("error_audio")
var correct_audio = document.getElementById("correct_audio")
var fim = document.getElementById("fim")

var var_nv1 = document.getElementById("nv1")
var var_nv2 = document.getElementById("nv2")
var var_nv3 = document.getElementById("nv3")
var var_nv4 = document.getElementById("nv4")
var var_nv5 = document.getElementById("nv5")
var var_nv6 = document.getElementById("nv6")
var var_nv7 = document.getElementById("nv7")
var var_nv8 = document.getElementById("nv8")
var var_nv9 = document.getElementById("nv9")
var var_nv10 = document.getElementById("nv10")

var var_niv = 1

var pontuação = 10000

var lado_pc = true
var descontar_init = false

var var_cpu = false
var var_ram = false
var var_cooler = false
var var_compressor = false
var var_motherboard = false
var var_fonte = false
var var_pci = false
var var_gpu = false
var var_ssd = false
var var_monitor = false
var var_system = false
var var_virus = false
var var_bios = false
var var_drivers = false

function cpu() {
	var_cpu = true
	if (var_niv == 1) {
		nv1()
	}
	if (var_niv == 2) {
		nv2()
	}
	if (var_niv == 3) {
		nv3()
	}
	if (var_niv == 4) {
		nv4()
	}
	if (var_niv == 5) {
		nv5()
	}
	if (var_niv == 6) {
		nv6()
	}
	if (var_niv == 7) {
		nv7()
	}
	if (var_niv == 8) {
		nv8()
	}
	if (var_niv == 9) {
		nv9()
	}
	if (var_niv == 10) {
		nv10()
	}
}
function ram() {
	var_ram = true
	if (var_niv == 1) {
		nv1()
	}
	if (var_niv == 2) {
		nv2()
	}
	if (var_niv == 3) {
		nv3()
	}
	if (var_niv == 4) {
		nv4()
	}
	if (var_niv == 5) {
		nv5()
	}
	if (var_niv == 6) {
		nv6()
	}
	if (var_niv == 7) {
		nv7()
	}
	if (var_niv == 8) {
		nv8()
	}
	if (var_niv == 9) {
		nv9()
	}
	if (var_niv == 10) {
		nv10()
	}
}
function cooler() {
	var_cooler = true
	if (var_niv == 1) {
		nv1()
	}
	if (var_niv == 2) {
		nv2()
	}
	if (var_niv == 3) {
		nv3()
	}
	if (var_niv == 4) {
		nv4()
	}
	if (var_niv == 5) {
		nv5()
	}
	if (var_niv == 6) {
		nv6()
	}
	if (var_niv == 7) {
		nv7()
	}
	if (var_niv == 8) {
		nv8()
	}
	if (var_niv == 9) {
		nv9()
	}
	if (var_niv == 10) {
		nv10()
	}
}
function compressor() {
	var_compressor = true
	if (var_niv == 1) {
		nv1()
	}
	if (var_niv == 2) {
		nv2()
	}
	if (var_niv == 3) {
		nv3()
	}
	if (var_niv == 4) {
		nv4()
	}
	if (var_niv == 5) {
		nv5()
	}
	if (var_niv == 6) {
		nv6()
	}
	if (var_niv == 7) {
		nv7()
	}
	if (var_niv == 8) {
		nv8()
	}
	if (var_niv == 9) {
		nv9()
	}
	if (var_niv == 10) {
		nv10()
	}
}
function motherboard() {
	var_motherboard = true
	if (var_niv == 1) {
		nv1()
	}
	if (var_niv == 2) {
		nv2()
	}
	if (var_niv == 3) {
		nv3()
	}
	if (var_niv == 4) {
		nv4()
	}
	if (var_niv == 5) {
		nv5()
	}
	if (var_niv == 6) {
		nv6()
	}
	if (var_niv == 7) {
		nv7()
	}
	if (var_niv == 8) {
		nv8()
	}
	if (var_niv == 9) {
		nv9()
	}
	if (var_niv == 10) {
		nv10()
	}
}
function fonte() {
	var_fonte = true
	if (var_niv == 1) {
		nv1()
	}
	if (var_niv == 2) {
		nv2()
	}
	if (var_niv == 3) {
		nv3()
	}
	if (var_niv == 4) {
		nv4()
	}
	if (var_niv == 5) {
		nv5()
	}
	if (var_niv == 6) {
		nv6()
	}
	if (var_niv == 7) {
		nv7()
	}
	if (var_niv == 8) {
		nv8()
	}
	if (var_niv == 9) {
		nv9()
	}
	if (var_niv == 10) {
		nv10()
	}
}
function pci() {
	var_pci = true
	if (var_niv == 1) {
		nv1()
	}
	if (var_niv == 2) {
		nv2()
	}
	if (var_niv == 3) {
		nv3()
	}
	if (var_niv == 4) {
		nv4()
	}
	if (var_niv == 5) {
		nv5()
	}
	if (var_niv == 6) {
		nv6()
	}
	if (var_niv == 7) {
		nv7()
	}
	if (var_niv == 8) {
		nv8()
	}
	if (var_niv == 9) {
		nv9()
	}
	if (var_niv == 10) {
		nv10()
	}
}
function gpu() {
	var_gpu = true
	if (var_niv == 1) {
		nv1()
	}
	if (var_niv == 2) {
		nv2()
	}
	if (var_niv == 3) {
		nv3()
	}
	if (var_niv == 4) {
		nv4()
	}
	if (var_niv == 5) {
		nv5()
	}
	if (var_niv == 6) {
		nv6()
	}
	if (var_niv == 7) {
		nv7()
	}
	if (var_niv == 8) {
		nv8()
	}
	if (var_niv == 9) {
		nv9()
	}
	if (var_niv == 10) {
		nv10()
	}
}
function ssd() {
	var_ssd = true
	if (var_niv == 1) {
		nv1()
	}
	if (var_niv == 2) {
		nv2()
	}
	if (var_niv == 3) {
		nv3()
	}
	if (var_niv == 4) {
		nv4()
	}
	if (var_niv == 5) {
		nv5()
	}
	if (var_niv == 6) {
		nv6()
	}
	if (var_niv == 7) {
		nv7()
	}
	if (var_niv == 8) {
		nv8()
	}
	if (var_niv == 9) {
		nv9()
	}
	if (var_niv == 10) {
		nv10()
	}
}
function monitor() {
	if (var_niv == 1) {
		nv1()
	}
	if (var_niv == 2) {
		nv2()
	}
	if (var_niv == 3) {
		nv3()
	}
	if (var_niv == 4) {
		nv4()
	}
	if (var_niv == 5) {
		nv5()
	}
	if (var_niv == 6) {
		nv6()
	}
	if (var_niv == 7) {
		nv7()
	}
	if (var_niv == 8) {
		nv8()
	}
	if (var_niv == 9) {
		nv9()
	}
	if (var_niv == 10) {
		nv10()
	}
}
function system() {
	var_system = true
	if (var_niv == 1) {
		nv1()
	}
	if (var_niv == 2) {
		nv2()
	}
	if (var_niv == 3) {
		nv3()
	}
	if (var_niv == 4) {
		nv4()
	}
	if (var_niv == 5) {
		nv5()
	}
	if (var_niv == 6) {
		nv6()
	}
	if (var_niv == 7) {
		nv7()
	}
	if (var_niv == 8) {
		nv8()
	}
	if (var_niv == 9) {
		nv9()
	}
	if (var_niv == 10) {
		nv10()
	}
}
function virus() {
	var_virus = true
	if (var_niv == 1) {
		nv1()
	}
	if (var_niv == 2) {
		nv2()
	}
	if (var_niv == 3) {
		nv3()
	}
	if (var_niv == 4) {
		nv4()
	}
	if (var_niv == 5) {
		nv5()
	}
	if (var_niv == 6) {
		nv6()
	}
	if (var_niv == 7) {
		nv7()
	}
	if (var_niv == 8) {
		nv8()
	}
	if (var_niv == 9) {
		nv9()
	}
	if (var_niv == 10) {
		nv10()
	}
}
function bios() {
	var_bios = true
	if (var_niv == 1) {
		nv1()
	}
	if (var_niv == 2) {
		nv2()
	}
	if (var_niv == 3) {
		nv3()
	}
	if (var_niv == 4) {
		nv4()
	}
	if (var_niv == 5) {
		nv5()
	}
	if (var_niv == 6) {
		nv6()
	}
	if (var_niv == 7) {
		nv7()
	}
	if (var_niv == 8) {
		nv8()
	}
	if (var_niv == 9) {
		nv9()
	}
	if (var_niv == 10) {
		nv10()
	}
}
function drivers() {
	var_drivers = true
	if (var_niv == 1) {
		nv1()
	}
	if (var_niv == 2) {
		nv2()
	}
	if (var_niv == 3) {
		nv3()
	}
	if (var_niv == 4) {
		nv4()
	}
	if (var_niv == 5) {
		nv5()
	}
	if (var_niv == 6) {
		nv6()
	}
	if (var_niv == 7) {
		nv7()
	}
	if (var_niv == 8) {
		nv8()
	}
	if (var_niv == 9) {
		nv9()
	}
	if (var_niv == 10) {
		nv10()
	}
}

function vira_pc() {
	lado_pc = !lado_pc
	if (lado_pc) {
		pc.src = "./arquivos/img/desktop_frente.png"
	} else {
		pc.src = "./arquivos/img/desktop_traz.png"
	}
}
function nv1_text() {
	var_cpu = false
	var_ram = false
	var_cooler = false
	var_compressor = false
	var_motherboard = false
	var_fonte = false
	var_pci = false
	var_gpu = false
	var_ssd = false
	var_monitor = false
	var_system = false
	var_virus = false
	var_bios = false
	var_drivers = false
	var_nv1.style.visibility = "visible"
	var_nv2.style.visibility = "hidden"
	var_nv3.style.visibility = "hidden"
	var_nv4.style.visibility = "hidden"
	var_nv5.style.visibility = "hidden"
	var_nv6.style.visibility = "hidden"
	var_nv7.style.visibility = "hidden"
	var_nv8.style.visibility = "hidden"
	var_nv9.style.visibility = "hidden"
	var_nv10.style.visibility = "hidden"
}
function nv1() {
	if (var_pci) {
		correct_audio.play()
		setTimeout(() => {
			nv2_text()
		}, 1)
	} else {
		if (pontuação > 0) {
			pontuação -= 500
			error_audio.play()
		}
		pontuacao.innerText = pontuação
	}
}
function nv2_text() {
	var_niv = 2
	var_cpu = false
	var_ram = false
	var_cooler = false
	var_compressor = false
	var_motherboard = false
	var_fonte = false
	var_pci = false
	var_gpu = false
	var_ssd = false
	var_monitor = false
	var_system = false
	var_virus = false
	var_bios = false
	var_drivers = false
	var_nv1.style.visibility = "hidden"
	var_nv2.style.visibility = "visible"
	var_nv3.style.visibility = "hidden"
	var_nv4.style.visibility = "hidden"
	var_nv5.style.visibility = "hidden"
	var_nv6.style.visibility = "hidden"
	var_nv7.style.visibility = "hidden"
	var_nv8.style.visibility = "hidden"
	var_nv9.style.visibility = "hidden"
	var_nv10.style.visibility = "hidden"
}
function nv2() {
	if (var_cooler) {
		correct_audio.play()
		setTimeout(() => {
			nv3_text()
		}, 1)
	} else {
		if (pontuação > 0) {
			pontuação += -500
			error_audio.play()
		}
		pontuacao.innerText = pontuação
	}
}

function nv3_text() {
	var_niv = 3
	var_cpu = false
	var_ram = false
	var_cooler = false
	var_compressor = false
	var_motherboard = false
	var_fonte = false
	var_pci = false
	var_gpu = false
	var_ssd = false
	var_monitor = false
	var_system = false
	var_virus = false
	var_bios = false
	var_drivers = false
	var_nv1.style.visibility = "hidden"
	var_nv2.style.visibility = "hidden"
	var_nv3.style.visibility = "visible"
	var_nv4.style.visibility = "hidden"
	var_nv5.style.visibility = "hidden"
	var_nv6.style.visibility = "hidden"
	var_nv7.style.visibility = "hidden"
	var_nv8.style.visibility = "hidden"
	var_nv9.style.visibility = "hidden"
	var_nv10.style.visibility = "hidden"
}
function nv3() {
	if (var_virus) {
		correct_audio.play()
		setTimeout(() => {
			nv4_text()
		}, 1)
	} else {
		if (pontuação > 0) {
			pontuação += -500
			error_audio.play()
		}
		pontuacao.innerText = pontuação
	}
}

function nv4_text() {
	var_niv = 4
	var_cpu = false
	var_ram = false
	var_cooler = false
	var_compressor = false
	var_motherboard = false
	var_fonte = false
	var_pci = false
	var_gpu = false
	var_ssd = false
	var_monitor = false
	var_system = false
	var_virus = false
	var_bios = false
	var_drivers = false
	var_nv1.style.visibility = "hidden"
	var_nv2.style.visibility = "hidden"
	var_nv3.style.visibility = "hidden"
	var_nv4.style.visibility = "visible"
	var_nv5.style.visibility = "hidden"
	var_nv6.style.visibility = "hidden"
	var_nv7.style.visibility = "hidden"
	var_nv8.style.visibility = "hidden"
	var_nv9.style.visibility = "hidden"
	var_nv10.style.visibility = "hidden"
}
function nv4() {
	if (var_drivers) {
		correct_audio.play()
		setTimeout(() => {
			nv5_text()
		}, 1)
	} else {
		if (pontuação > 0) {
			pontuação += -500
			error_audio.play()
		}
		pontuacao.innerText = pontuação
	}
}

function nv5_text() {
	var_niv = 5
	var_cpu = false
	var_ram = false
	var_cooler = false
	var_compressor = false
	var_motherboard = false
	var_fonte = false
	var_pci = false
	var_gpu = false
	var_ssd = false
	var_monitor = false
	var_system = false
	var_virus = false
	var_bios = false
	var_drivers = false
	var_nv1.style.visibility = "hidden"
	var_nv2.style.visibility = "hidden"
	var_nv3.style.visibility = "hidden"
	var_nv4.style.visibility = "hidden"
	var_nv5.style.visibility = "visible"
	var_nv6.style.visibility = "hidden"
	var_nv7.style.visibility = "hidden"
	var_nv8.style.visibility = "hidden"
	var_nv9.style.visibility = "hidden"
	var_nv10.style.visibility = "hidden"
}
function nv5() {
	if (var_motherboard) {
		correct_audio.play()
		setTimeout(() => {
			nv6_text()
		}, 1)
	} else {
		if (pontuação > 0) {
			pontuação += -500
			error_audio.play()
		}
		pontuacao.innerText = pontuação
	}
}

function nv6_text() {
	var_niv = 6
	var_cpu = false
	var_ram = false
	var_cooler = false
	var_compressor = false
	var_motherboard = false
	var_fonte = false
	var_pci = false
	var_gpu = false
	var_ssd = false
	var_monitor = false
	var_system = false
	var_virus = false
	var_bios = false
	var_drivers = false
	var_nv1.style.visibility = "hidden"
	var_nv2.style.visibility = "hidden"
	var_nv3.style.visibility = "hidden"
	var_nv4.style.visibility = "hidden"
	var_nv5.style.visibility = "hidden"
	var_nv6.style.visibility = "visible"
	var_nv7.style.visibility = "hidden"
	var_nv8.style.visibility = "hidden"
	var_nv9.style.visibility = "hidden"
	var_nv10.style.visibility = "hidden"
}
function nv6() {
	if (var_ssd) {
		correct_audio.play()
		setTimeout(() => {
			nv7_text()
		}, 1)
	} else {
		if (pontuação > 0) {
			pontuação += -500
			error_audio.play()
		}
		pontuacao.innerText = pontuação
	}
}

function nv7_text() {
	var_niv = 7
	var_cpu = false
	var_ram = false
	var_cooler = false
	var_compressor = false
	var_motherboard = false
	var_fonte = false
	var_pci = false
	var_gpu = false
	var_ssd = false
	var_monitor = false
	var_system = false
	var_virus = false
	var_bios = false
	var_drivers = false
	var_nv1.style.visibility = "hidden"
	var_nv2.style.visibility = "hidden"
	var_nv3.style.visibility = "hidden"
	var_nv4.style.visibility = "hidden"
	var_nv5.style.visibility = "hidden"
	var_nv6.style.visibility = "hidden"
	var_nv7.style.visibility = "visible"
	var_nv8.style.visibility = "hidden"
	var_nv9.style.visibility = "hidden"
	var_nv10.style.visibility = "hidden"
}
function nv7() {
	if (var_ram) {
		correct_audio.play()
		setTimeout(() => {
			nv8_text()
		}, 1)
	} else {
		if (pontuação > 0) {
			pontuação += -500
			error_audio.play()
		}
		pontuacao.innerText = pontuação
	}
}

function nv8_text() {
	var_niv = 8
	var_cpu = false
	var_ram = false
	var_cooler = false
	var_compressor = false
	var_motherboard = false
	var_fonte = false
	var_pci = false
	var_gpu = false
	var_ssd = false
	var_monitor = false
	var_system = false
	var_virus = false
	var_bios = false
	var_drivers = false
	var_nv1.style.visibility = "hidden"
	var_nv2.style.visibility = "hidden"
	var_nv3.style.visibility = "hidden"
	var_nv4.style.visibility = "hidden"
	var_nv5.style.visibility = "hidden"
	var_nv6.style.visibility = "hidden"
	var_nv7.style.visibility = "hidden"
	var_nv8.style.visibility = "visible"
	var_nv9.style.visibility = "hidden"
	var_nv10.style.visibility = "hidden"
}
function nv8() {
	if (var_system) {
		correct_audio.play()
		setTimeout(() => {
			nv9_text()
		}, 1)
	} else {
		if (pontuação > 0) {
			pontuação += -500
			error_audio.play()
		}
		pontuacao.innerText = pontuação
	}
}

function nv9_text() {
	var_niv = 9
	var_cpu = false
	var_ram = false
	var_cooler = false
	var_compressor = false
	var_motherboard = false
	var_fonte = false
	var_pci = false
	var_gpu = false
	var_ssd = false
	var_monitor = false
	var_system = false
	var_virus = false
	var_bios = false
	var_drivers = false
	var_nv1.style.visibility = "hidden"
	var_nv2.style.visibility = "hidden"
	var_nv3.style.visibility = "hidden"
	var_nv4.style.visibility = "hidden"
	var_nv5.style.visibility = "hidden"
	var_nv6.style.visibility = "hidden"
	var_nv7.style.visibility = "hidden"
	var_nv8.style.visibility = "hidden"
	var_nv9.style.visibility = "visible"
	var_nv10.style.visibility = "hidden"
}
function nv9() {
	if (var_fonte) {
		correct_audio.play()
		setTimeout(() => {
			nv10_text()
		}, 1)
	} else {
		if (pontuação > 0) {
			pontuação += -500
			error_audio.play()
		}
		pontuacao.innerText = pontuação
	}
}

function nv10_text() {
	var_niv = 10
	var_cpu = false
	var_ram = false
	var_cooler = false
	var_compressor = false
	var_motherboard = false
	var_fonte = false
	var_pci = false
	var_gpu = false
	var_ssd = false
	var_monitor = false
	var_system = false
	var_virus = false
	var_bios = false
	var_drivers = false
	var_nv1.style.visibility = "hidden"
	var_nv2.style.visibility = "hidden"
	var_nv3.style.visibility = "hidden"
	var_nv4.style.visibility = "hidden"
	var_nv5.style.visibility = "hidden"
	var_nv6.style.visibility = "hidden"
	var_nv7.style.visibility = "hidden"
	var_nv8.style.visibility = "hidden"
	var_nv9.style.visibility = "hidden"
	var_nv10.style.visibility = "visible"
}
function nv10() {
	if (var_compressor == true) {
		correct_audio.play()
		game2.style = "hidden"
		document.getElementById("pt").style = "hidden"
		var_nv10.style.visibility = "hidden"
		fim.style = "visible"
	} else {
		if (pontuação > 0) {
			pontuação += -500
			error_audio.play()
		}
		pontuacao.innerText = pontuação
	}
}

function start() {
	init.style.visibility = "hidden"
	game2.style.visibility = "visible"
}
function fullScreen() {
	var element = document.documentElement
	if (element.requestFullscreen) {
		element.requestFullscreen()
	} else if (element.mozRequestFullScreen) {
		element.mozRequestFullScreen()
	} else if (element.webkitRequestFullscreen) {
		element.webkitRequestFullscreen()
	} else if (element.msRequestFullscreen) {
		element.msRequestFullscreen()
	}
}
