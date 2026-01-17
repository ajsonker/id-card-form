function doGet(e) {
  const sheet = SpreadsheetApp
    .getActive()
    .getSheetByName("ID_CARD_DATA");

  sheet.appendRow([
    e.parameter.name || "",
    e.parameter.designation || "",
    e.parameter.dob || "",
    e.parameter.fhname || "",
    e.parameter.appointment || "",
    e.parameter.retirement || "",
    e.parameter.blood || "",
    e.parameter.ppo || "",
    e.parameter.mark || "",
    e.parameter.nominee || "",
    e.parameter.phone || "",
    e.parameter.address || "",
    e.parameter.photo || "",
    new Date()
  ]);

  return ContentService
    .createTextOutput("success")
    .setMimeType(ContentService.MimeType.TEXT);
}
