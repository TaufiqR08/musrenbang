function _onload(data) {
	myCode = data.code;
	_.dt = [];
	_.tahun = data.tahun;
	_.tahapan = data.tahapan;

	const main = document.querySelector("main");
	viewWebsite = _themaDashboardNoMenu({
		htmlKeterangan: htmlTahunOption(),
	});
	main.innerHTML = viewWebsite;
	const footer = document.querySelector("footer");
	footer.innerHTML =
		`
        <div class="container-fluid bg-info text-light p-1 text-center">
            <p>BAPPEDA©2022,Kabupaten Sumbawa Barat</p>
        </div>
    ` +
		modal_.ex1({
			cls: "modal-dialog-centered modal-dialog-scrollable",
			clsHeader: "",
			clsBody: "",
		});
	$("#footer").html(startmfc.endBootstrapHTML(2));
}
function htmlTahunOption() {
	return `
        <div class=" container-fluid p-3 row justify-content-between">
            ${
							card_.ex3({
								cls: "col-5",
								html: style_.rowCol({
									clsRow: "",
									col: [
										{
											cls: "-4 p-0",
											html: `<img src="${
												assert + "fs_css/logo/bg-bpt1.jpg"
											}" class="bd-placeholder-img card-img-top" width="100%" height="100%">`,
										},
										{
											cls: "-8  pcard3",
											html: card_.sbody({
												clsHeader: " bg-light text-dark",
												htmlHeader: `Dr. Ir. H. W. Musyafirin, M.M - Fud Syaifuddin, ST`,
												clsBody: "",
												tukar: "Bagus H",
												htmlBody: `
                                        <div class="d-flex flex-column">
                                            <div class=" p-2 m-auto">
                                                ${
																									button_.ex2({
																										text: `<span class="mdi mdi-database mdi-18px me-2"></span>2021`,
																										cls: " btn-sm btn-danger m-2",
																										attr: ` onclick="_selectTahun(2021)"`,
																									}) +
																									button_.ex2({
																										text: `<span class="mdi mdi-database mdi-18px me-2"></span>2022`,
																										cls: " btn-sm btn-warning m-2",
																										attr: ` onclick="_selectTahun(2022)"`,
																									}) +
																									button_.ex2({
																										text: `<span class="mdi mdi-database mdi-18px me-2"></span>2023`,
																										cls: " btn-sm btn-info m-2",
																										attr: ` onclick="_selectTahun(2023)"`,
																									})
																								}
                                            </div>
                                            <div class="p-2 m-auto">
                                                ${
																									button_.ex2({
																										text: `<span class="mdi mdi-database mdi-18px me-2"></span>2024`,
																										cls: " btn-sm btn-primary me-2",
																										attr: ` onclick="_selectTahun(2024)"`,
																									}) +
																									button_.ex2({
																										text: `<span class="mdi mdi-database mdi-18px me-2"></span>2025`,
																										cls: " btn-sm btn-success me-2",
																										attr: ` onclick="_selectTahun(2025)"`,
																									})
																								}
                                            </div>
                                        </div>
                                    `,
											}),
										},
									],
								}),
							}) +
							card_.ex3({
								cls: "col-5 ",
								html: style_.rowCol({
									clsRow: "",
									col: [
										{
											cls: "-4 p-0",
											html: `<img src="${
												assert + "fs_css/logo/bupati25.jpg"
											}" class="bd-placeholder-img card-img-top" width="100%" height="100%">`,
										},
										{
											cls: "-8  pcard3",
											html: card_.sbody({
												clsHeader: " bg-light text-dark",
												htmlHeader: `H. Amar Nurmansyah, S.T., M.Si. - Hj. Hanipah, S.Pt., M.M.Inov.`,
												clsBody: "",
												tukar: "Bagus H",
												htmlBody: `
                                        <div class="d-flex flex-column">
                                            <div class=" p-2 m-auto">
                                                ${
																									button_.ex2({
																										text: `<span class="mdi mdi-database mdi-18px me-2"></span>2026`,
																										cls: " btn-sm btn-danger m-2",
																										attr: ` onclick="_selectTahun(2026)"`,
																									}) +
																									button_.ex2({
																										text: `<span class="mdi mdi-database mdi-18px me-2"></span>2027`,
																										cls: " btn-sm btn-warning m-2",
																										attr: ` onclick="_selectTahun(2027)"`,
																									}) +
																									button_.ex2({
																										text: `<span class="mdi mdi-database mdi-18px me-2"></span>2028`,
																										cls: " btn-sm btn-info m-2",
																										attr: ` onclick="_selectTahun(2028)"`,
																									})
																								}
                                            </div>
                                            <div class="p-2 m-auto">
                                                ${
																									button_.ex2({
																										text: `<span class="mdi mdi-database mdi-18px me-2"></span>2029`,
																										cls: " btn-sm btn-primary me-2",
																										attr: ` onclick="_selectTahun(2029)"`,
																									}) +
																									button_.ex2({
																										text: `<span class="mdi mdi-database mdi-18px me-2"></span>2030`,
																										cls: " btn-sm btn-success me-2",
																										attr: ` onclick="_selectTahun(2030)"`,
																									})
																								}
                                            </div>
                                        </div>
                                    `,
											}),
										},
									],
								}),
							})
						}
        </div>
    `;
}
function _selectTahun(tahun) {
	if (_.tahapan == 1) {
		return _redirect("control/usulan/" + tahun);
	}
	return _redirect("control/usulanPembahasan/" + tahun);
}
