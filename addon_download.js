const query = window.location.search;
const param = new URLSearchParams(query);
const name = param.get('name');
let mod_title = document.getElementById("title");
let mod_description = document.getElementById("description");


switch (name) {
    case "mtt":
        mtt();
        break;
    case "n1ca":
        n1ca();
        break;
    case "c1ca":
        c1ca();
        break;
    case "entc":
        entc();
        break;
    case "n1tc":
        n1tc();
        break;
    case "tcak":
        tcak();
        break;
    case "test":
        test();
        break;
    default:
        notf();
}

function write_info(versi, relea, maker, expri, extra) {
    document.getElementsByClassName("mod_info")[0].innerHTML = versi;
    document.getElementsByClassName("mod_info")[1].innerHTML = relea;
    document.getElementsByClassName("mod_info")[2].innerHTML = maker;
    document.getElementsByClassName("mod_info")[3].innerHTML = expri;
    document.getElementsByClassName("mod_info")[4].innerHTML = extra;
}

function show_screenshot(folder_name, file_names, extension = null) {
    let files = file_names.split(",");
    let count = files.length;

    for (let i = 0; i < count; i++) {
        let newimg = document.createElement('img');
        newimg.src = "resource/" + folder_name + '/' + files[i];
        if (extension == null) {
            newimg.src = "resource/" + folder_name + files[i];
        }
        else {
            newimg.src = "resource/" + folder_name + '/' + files[i] + "." + extension;
        }
        document.getElementById("screenshot").append(newimg);
    }
}

function downrel() {
    const selected_ver = document.getElementById("version_select").options[document.getElementById("version_select").selectedIndex].value;
    switch (name) {
        case "mtt":
            down.href = "/files/mca테스트용 열차 " + selected_ver + "(마인카트 제작).zip";
            break;
        case "n1ca":
            down.href = "/files/1호선 납작이 " + selected_ver + "(마인카트 제작).zip";
            break;
        case "c1ca":
            down.href = "/files/1호선 큐브 " + selected_ver + "(마인카트 제작).zip";
            break;
        case "entc":
            down.href = selected_ver == "3.0.2" ? "/files/엔티티컨트롤러 Entitycontroller V3.zip" : "/files/엔티티 컨트롤러Entity Controller " + selected_ver + "(마인카트 제작).zip";
            break;
        case "n1tc":
            down.href = "/files/" + "1호선 납작이 for MTC 1.0.2(마인카트 제작).zip";
            break;
        case "tcak":
            down.href = "/files/" + "MTC&MCA 한국어팩(마인카트 제작).zip";
            break;
        case "test":
            down.href = "/files/1호선 개조저항LQ_forMCA2.mcaddon";
        default:
            alert("다운로드 할 파일을 찾지 못했습니다.");
    }
}

function version_select(versions) {
    let vers = versions.split(",");
    let count = vers.length;

    for (let i = 0; i < count; i++) {
        let newOption = document.createElement('option');
        if (i == 0) {
            newOption.selected;
        }
        newOption.innerHTML = vers[i] + (i == 0 ? " (최신)" : "");
        newOption.value = vers[i];
        document.getElementById("version_select").append(newOption);
    }

    downrel();
}
function mtt() {
    document.title = "mca모드 테스트용 열차";
    mod_title.innerHTML = "mca모드 테스트용 열차";
    mod_description.innerHTML = "mca모드를 이용하기 위한 기본적인 열차입니다.";
    write_info("2.0.2", "2023-10-22", "마인카트", "필요없음", "mca모드");
    document.getElementById("code_space").style.display = 'none';
    down.style.display = 'block';
    document.getElementById("img").src = "resource/mtt/mtt_1.webp";
    show_screenshot("mtt", "mtt_1,mtt_2,mtt_3", "webp");
    version_select("2.0.2");
}

function n1ca() {
    document.title = "1호선 납작이";
    mod_title.innerHTML = "<span style='text-decoration: line-through;'>1호선 납작이</span><br>업데이트 후 재배포 예정입니다!";
    mod_description.innerHTML = "1호선 납작이 입니다. 아래에 코드를 입력하고 다운 받으세요!";
    write_info("2.0.0", "2023-8-13", "마인카트", "필요없음", "mca모드");
    show_screenshot("n1ca", "n1ca_1,n1ca_2,n1ca_3", "webp");
    version_select("2.0.0");
}

function n1tc() {
    document.title = "1호선 납작이 for MTC";
    mod_title.innerHTML = "1호선 납작이 for MTC";
    document.getElementById('video_iframe').src = 'https://www.youtube.com/embed/_NxGA9i8Lcc?si=M8ZEnRukfm9lUGE0';
    document.getElementById('youtube_video').style.display = 'flex';
    mod_description.innerHTML = "MTC용 1호선 납작이 입니다. 아래에 다운로드 버튼을 누르고 다운 받으세요!";
    document.getElementById("code_space").style.display = 'none';
    down.style.display = 'block';
    document.getElementById("img").src = "resource/n1tc/n1tc_1.webp";
    write_info("1.0.2", "2023-11-19", "마인카트", "필요없음", "mca모드");
    show_screenshot("n1tc", "n1tc_1,n1tc_2,n1tc_3", "webp");
    version_select("1.0.2");
}

function c1ca() {
    mod_title.innerHTML = "1호선 큐브";
    document.getElementById('video_iframe').src = 'https://www.youtube.com/embed/I9Dsi69Fjic?si=QFugXWrA8hxPhjpA';
    document.getElementById('youtube_video').style.display = 'flex';
    mod_description.innerHTML = "구독자 300념 기념으로 배포하는 1호선 큐브 입니다.<br>아래에 코드를 입력하고 다운 받으세요!";
    write_info("2.0.3", "2023-10-21", "마인카트", "필요없음", "mca모드");
    document.getElementById("img").src = "resource/c1ca/c1ca_1.webp";
    show_screenshot("c1ca", "c1ca_1,c1ca_4,c1ca_3", "webp");
    version_select("2.0.3");
}

function entc() {
    mod_title.innerHTML = "엔티티 컨트롤러";
    mod_description.innerHTML = "마인크래프트의 모든 엔티티를 회전,삭제 하세요!<br>엔티티를 블록방향에 맞춰 회전하고 없앨 수 있는 애드온 입니다. 다른 애드온의 커스텀 엔티티를 사용할 때 유용합니다!<br><br>회전하고 싶은 방향을 보고 '회전90°' '회전45°' '회전15°' 아이템을 사용하면 각각 표지판이나 블록처럼 90도 45도 15도에 맞춰 회전시켜 줍니다. (v3)<br>회전하고 싶은 방향을 보고 'rotate'아이템을 사용하면 엔티티를 블록처럼 90도에 맞춰 회전할 수 있습니다.(v2)<br>혹은 'N', 'E', 'W', 'S' 아이템을 사용하여 엔티티를 블록처럼 90도에 맞춰 회전할 수 있습니다.(v1)";
    document.getElementById("code_space").style.display = 'none';
    down.style.display = 'block';
    write_info("3.0.2", "2023-12-30", "마인카트", "필요없음", "필요없음");
    document.getElementById("img").src = "resource/entc/entc_1.webp";
    show_screenshot("entc", "entc_1,entc_2,entc_3,entc231230_1,entc231230_2", "webp");
    version_select("3.0.2,2.0.11,1.1.0");
}

function tcak() {
    mod_title.innerHTML = "MTC&MCA 한국어팩";
    mod_description.innerHTML = "MTC와 MCA의 아이템 이름을 한국어로 바꿔줍니다.";
    document.getElementById("code_space").style.display = 'none';
    down.style.display = 'block';
    write_info("1.0.0", "2023-11-16", "마인카트", "필요없음", "필요없음");
    document.getElementById("img").src = "resource/tcak/tcak.webp";
    version_select("1.0.0");
}

function notf() {
    document.title = "not found!"
    mod_title.innerHTML = "페이지를 찾을 수 없습니다!";
    document.getElementById("content").style.display = 'none';
    img.src = "resource/ui/page_not_found.webp";
    document.getElementById("image_viewer").style.backgroundColor = '#0011ff';
    downrel();
}


function test() {
    mod_title.innerHTML = "Test";
    mod_description.innerHTML = "MTC와 MCA의 아이템 이름을 한국어로 바꿔줍니다.";
    document.getElementById("code_space").style.display = 'none';
    down.style.display = 'block';
    write_info("1.0.0", "2023-11-16", "마인카트", "필요없음", "필요없음");
    version_select("1.0.0");
}