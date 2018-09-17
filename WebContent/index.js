$(document).ready(function() {
	$("#Enviar").on("click", function () {
		var total = 0;
		var principal = $('input[name=pratoPrincipal]:checked').val();
		var convenio = $("#convenio").val();
		var html = '';
		
		if (principal == 1) {
			total += 10.00;
		} else if (principal == 2) {
			total += 12.00;
		} else if (principal == 3) {
			total += 11.00;
		}
		
		if ($("#acompSalada").is(':checked')) {
			total += 1.50;
		}
		
		if ($("#acompLegumes").is(':checked')) {
			total += 2.00;
		}
		
		if ($("#acompFarofa").is(':checked')) {
			total += 1.00;
		}
		
		if ($("#acompFritas").is(':checked')) {
			total += 2.00;
		}
		
		if (convenio == 1) {
			total = total*0.95;
		} else if (convenio == 2) {
			total = total*0.93;
		} else if (convenio == 3) {
			total = total*0.90;
		} else if (convenio == 3) {
			total = total*0.95;
		}
		
		total = total.toFixed(2);
		
		html += "O valor total do almoço ficou em "+ total + " reais";
		
		$("#valortotal").html(html);
	});
});