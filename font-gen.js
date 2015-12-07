/* ����õ����ñ�������� */
var g_Font = {
	"style" : "normal", //"italic","oblique"
	"variant" : "normal", //"small-caps","inherit"
	"weight" : "normal", //"bold"
	"size" : "",
	"lineheight" : "",
	"family" : ""
}

function GenerateCode() {
	var oCode = document.getElementById("iFullCode");
	var oAbbr = document.getElementById("iAbbr");
	var tAbbr = document.getElementById("txtAbbr");
	SetFontStyle();
	SetFontVariant();
	SetFontWeight();
	SetLineHeight();
	SetFontSize();
	SetFontFamily();
	oCode.value = GenCode();
	oAbbr.value = GenAbbr();
	tAbbr.value = GenAbbr();
	SetSampleStyle();
}

var cbfsize = document.getElementById("cbFontSize");
var cbffami = document.getElementById("cbFontFamily");
var cblineh = document.getElementById("cbLineHeight");

//���ɴ�����д����������ʱ��
function GenAbbr() {
	var abbrHead = ".font {\n  font:";
	var abbr = "";
	// line-height �� font-size �� font-family ǰ��ĸ�ѡ�򶼹�ѡ�ˣ�
	// ���� ����Ϊ��
	if ((cbfsize.checked && cbffami.checked && cblineh.checked) && (g_Font.size != "" && (g_Font.lineheight != "" && g_Font.lineheight != "normal") && g_Font.family != "")) {
	    // �ų� font-style ��Ĭ��ֵ
		if (g_Font.style != "normal") {
			abbr += g_Font.style;
		}
		// �ų� font-variant ��Ĭ��ֵ
		if (g_Font.variant != "normal") {
			// �Ƿ��ȼӿո�
			if(abbr != ""){
			  abbr += " "
			}
			abbr += g_Font.variant;
		}
		// �ų� font-weight ��Ĭ��ֵ
		if (g_Font.weight != "normal") {
			// �Ƿ��ȼӿո�
			if(abbr != ""){
			  abbr += " "
			}
			abbr += g_Font.weight;
		}
		// font-size / line-height font-family
		// �Ƿ��ȼӿո�
		if(abbr != ""){
			abbr += " "
		}
		abbr += g_Font.size + "/" + g_Font.lineheight + " " + g_Font.family;
		// ��������������ݣ����ǳ�ʼֵ��
		if(abbr != ""){
		  return abbrHead + abbr + ";\n}";
		}
		else return abbrHead + abbr + "\n}";
	} else
		return GenCode();
}

// ������ȫ�����
function GenCode() {
	var fHead = ".font {\n";
	var full = "";
	// font-style
	if(g_Font.style != "normal") {
		full += "  font-style:" + g_Font.style + ";\n";
	}
	// font-variant
	if(g_Font.variant != "normal") {
		full += "  font-variant:"+ g_Font.variant +";\n";
	}
	// font-weight
	if (g_Font.weight != "normal") {
		full += "  font-weight:" + g_Font.weight + ";\n";
	}
	// line-height
	if (g_Font.lineheight != "" && g_Font.lineheight != "normal" && g_Font.lineheight !="100%") {
		full += "  line-height:" + g_Font.lineheight + ";\n";
	}
	// font-size
	if (g_Font.size != "") {
		full += "  font-size:" + g_Font.size + ";\n";
	}
	// font-family
	if (g_Font.family != "") {
		full += "  font-family:" + g_Font.family + ";\n";
	}
	return fHead + full + "\n}";
}

/* ����font-style�ı��취 */
/* ��ȡfont-style�ı���, �����޸� */
var fontstyle = document.getElementById("txtFontStyle");

function FillFontStyle(ffs) {
	fontstyle.value = ffs;
}

function SetFontStyle() {
	g_Font.style = fontstyle.value;
}

/* ����font-variant */
/* ��ȡfont-variant�ı���, �����޸� */
var fontvariant = document.getElementById("txtFontVariant");

function FillFontVariant(ffv) {
	fontvariant.value = ffv;
}

function SetFontVariant() {
	g_Font.variant = fontvariant.value;
}

/*  ��д �� ����font-weight */
var fontweight = document.getElementById("txtFontWeight");

function FillFontWeight(ffw) {
	fontweight.value = ffw;
}

function SetFontWeight() {
	g_Font.weight = fontweight.value;
}

/*  ����line-height */
var lineheight = document.getElementById("txtLineHeight");
var lhcheckbox = document.getElementById("cbLineHeight");

function FillLineHeight(flh){
  lineheight.value=flh;
}

function SetLineHeight() {
	if (lhcheckbox.checked)
		g_Font.lineheight = lineheight.value;
}

/* ����font-size */
var fontsize = document.getElementById("txtFontSize");
var fszcheckbox = document.getElementById("cbFontSize");

function FillFontSize(ffsize){
  fontsize.value = ffsize;
}
function SetFontSize() {
	if (fszcheckbox.checked && fontsize.value!="") {
		g_Font.size = fontsize.value;
	}
}

/*  ����font-family */
var fontfamily = document.getElementById("txtFontFamily");

function FillFontFamily(fffa){
  if(fffa=="CLEAR"){
    fontfamily.value="";}
  else if(fontfamily.value != ""){
    fontfamily.value += "," + fffa;
  }
  else{
    fontfamily.value += fffa;
  }
}

function SetFontFamily() {
	if (cbffami.checked) {
		g_Font.family = fontfamily.value;
	}
}

/* �޸�sample�� */
function SetSampleStyle() {
  var ssst = document.getElementById("sample");
  ssst.style.FontStyle=g_Font.style;
  ssst.style.FontVariant=g_Font.variant;
  ssst.style.FontWeight=g_Font.weight;
  ssst.style.FontSize=g_Font.size;
  ssst.style.LineHeight=g_Font.lineheight;
  ssst.style.FontFamily=g_Font.family;
}
