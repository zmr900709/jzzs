
var hz6d_fixed_conf = {};
hz6d_fixed_conf.arg = "10032978";
hz6d_fixed_conf.cid = "72032978";
var globalWindowAttr = 'width=752,height=530,top=100,left=100,status=yes,toolbar=no,menubar=no,resizable=yes,scrollbars=yes,location=no,titlebar=no';

if (typeof hz6d_from_page == 'undefined') var hz6d_from_page = hz6d_getCookie("53kf_"+hz6d_fixed_conf.cid+"_keyword");
if (hz6d_from_page == "")
{
	hz6d_from_page = document.referrer;
	document.cookie = "53kf_"+hz6d_fixed_conf.cid+"_keyword="+hz6d_from_page;
}

function hz6d_getCookie(name)
{
	var offset = document.cookie.indexOf(name + "=");
	if (offset != -1)
	{
		offset += name.length + 1;
		var end = document.cookie.indexOf(";", offset);
		if (end == -1)
		{
			end = document.cookie.length;
		}
		return document.cookie.substring(offset, end);
	}
	else
	{
		return "";
	}
}

function open_pic_chat()
{
	try{
	var chat_win= window.open(href_str,'_blank',globalWindowAttr);
	chat_win.focus();
	}catch(e){
		
	}
}

function hz6d_FixedKF(v,s)
{
  if (hz6d_fixed_conf[s].img == '') hz6d_fixed_conf[s].img = '../../../../tb.53kf.com/style/setting/ver06/img/wk_zixun_cn.gif'/*tpa=http://tb.53kf.com/style/setting/ver06/img/wk_zixun_cn.gif*/;
  if (hz6d_fixed_conf[s].text == '') hz6d_fixed_conf[s].text = "";

  
  var img = hz6d_fixed_conf[s].img, text = hz6d_fixed_conf[s].text, height = hz6d_fixed_conf[s].height, width = hz6d_fixed_conf[s].width, style = hz6d_fixed_conf[s].style, arg = hz6d_fixed_conf.arg ,kflist = hz6d_fixed_conf[s].kf;
  href_str = 'http://tb.53kf.com/webCompany.php?arg=' + arg + '&style=' + style + '&keyword=' + escape(hz6d_from_page) + '&kf=' + kflist;
  
  if (v == "iframe")
  {
    document.write('<iframe marginwidth="0" marginheight="0" frameborder="0" cellspacing="0" width="' + width + '" height="' + height + '" src="' + href_str + '"></iframe>');
  }
  else if (v == "img")
  {
    document.write('<a href="' + href_str + '" target="_blank"><img width="' + width + '" height="' + height + '" src="' + img + '" /></a>');
  }
  else
  {
    //document.write('<div width="' + width + '" height="' + height + '"><a href="' + href_str + '"  class="moqu_header" target="_blank">' + text + '</a></div>');
  }
}