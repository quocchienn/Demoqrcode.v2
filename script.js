const banks = [
  { id: "ABB", name: "ABBANK", logo: "https://i.postimg.cc/7hmLngvc/ABBANK.png" },
  { id: "CAKE", name: "CAKE Bank", logo: "https://api.vietqr.io/img/CAKE.png" },
  { id: "CIMB", name: "CIMB Bank", logo: "https://api.vietqr.io/img/CIMB.png" },
  { id: "ACB", name: "ACB", logo: "https://api.vietqr.io/img/ACB.png" },
  { id: "AGRIBANK", name: "Agribank", logo: "https://i.postimg.cc/B65btrmJ/Agribank-Plus.png" },
  { id: "BACABANK", name: "Bac A Bank", logo: "https://i.postimg.cc/63xTWWLH/BAC-A-BANK-Mobile-Banking.png" },
  { id: "BAOVIETBANK", name: "Bảo Việt Bank", logo: "https://i.postimg.cc/bwMs5HGf/IMG-4553.png" },
  { id: "BIDV", name: "BIDV", logo: "https://api.vietqr.io/img/BIDV.png" },
  { id: "EXIMBANK", name: "Eximbank", logo: "https://i.postimg.cc/fWjSb9PY/Eximbank-EDigi.png" },
  { id: "HDB", name: "HDBank", logo: "https://i.postimg.cc/rpBRDCcN/HDBank.png" },
  { id: "HLBANK", name: "Hong Leong Bank", logo: "https://i.postimg.cc/kgDmL08B/HLB-Connect-Vietnam.png" },
  { id: "IBK", name: "IBK Bank", logo: "https://api.vietqr.io/img/IBK.png" },
  { id: "INDOVINABANK", name: "Indovina Bank", logo: "https://i.postimg.cc/yY1Byg8h/IVB-Mobile-Banking.png" },
  { id: "KIENLONGBANK", name: "KienlongBank", logo: "https://i.postimg.cc/FFgNSgNs/Kienlong-Bank-Plus.png" },
  { id: "LPB", name: "LienVietPostBank", logo: "https://api.vietqr.io/img/LPB.png" },
  { id: "MSB", name: "MSB", logo: "https://api.vietqr.io/img/MSB.png" },
  { id: "MBBANK", name: "MB Bank", logo: "https://i.postimg.cc/zGPJBz5C/MB-Bank.png" },
  { id: "NAMABANK", name: "Nam A Bank", logo: "https://i.postimg.cc/437XHDNr/NAM-A-BANK-OPEN-BANKING.png" },
  { id: "NCB", name: "NCB", logo: "https://api.vietqr.io/img/NCB.png" },
  { id: "OCB", name: "OCB", logo: "https://api.vietqr.io/img/OCB.png" },
  { id: "OCEANBANK", name: "OceanBank", logo: "https://api.vietqr.io/img/OCEANBANK.png" },
  { id: "PGBANK", name: "PG Bank", logo: "https://i.postimg.cc/Pfmr4nzH/PGBank-App.png" },
  { id: "PBVN", name: "Public Bank Vietnam", logo: "https://api.vietqr.io/img/PBVN.png" },
  { id: "PVCOMBANK", name: "PVcomBank", logo: "https://i.postimg.cc/VvBfLXLv/PVcom-Bank-m-Pos.png" },
  { id: "SACOMBANK", name: "Sacombank", logo: "https://i.postimg.cc/HW771Nwv/Sacombank-m-Banking.png" },
  { id: "SAIGONBANK", name: "SaigonBank", logo: "https://i.postimg.cc/PJZLbLfn/SAIGONBANK-Smart-Banking.png" },
  { id: "SCB", name: "SCB", logo: "https://api.vietqr.io/img/SCB.png" },
  { id: "SEABANK", name: "SeABank", logo: "https://i.postimg.cc/ht0d37LS/Se-AMobile.png" },
  { id: "SHB", name: "SHB", logo: "https://api.vietqr.io/img/SHB.png" },
  { id: "SHBVN", name: "Shinhan Bank", logo: "https://i.postimg.cc/c6yxdXNV/Shinhan-SOL-Vietnam.png" },
  { id: "STANDARDCHARTERED", name: "Standard Chartered", logo: "https://i.postimg.cc/Jz3nzV0K/SC-Mobile-Vietnam.png" },
  { id: "TPB", name: "TPBank", logo: "https://i.postimg.cc/RFdK6J0s/TPBank-Mobile.png" },
  { id: "UNITEDOVERSEAS", name: "United Overseas Bank", logo: "https://api.vietqr.io/img/UOB.png" },
  { id: "VIB", name: "VIB", logo: "https://api.vietqr.io/img/VIB.png" },
  { id: "VIETABANK", name: "VietABank", logo: "https://i.postimg.cc/BQV5BFBR/Viet-ABank-Ez-Mobile.png" },
  { id: "VIETBANK", name: "VietBank", logo: "https://api.vietqr.io/img/VIETBANK.png" },
  { id: "VIETCOMBANK", name: "Vietcombank", logo: "https://i.postimg.cc/bw4TpnG1/VCB-Digibank.png" },
  { id: "VIETINBANK", name: "VietinBank", logo: "https://i.postimg.cc/Gm4QWKpc/Vietin-Bank-i-Pay.png" },
  { id: "VPBANK", name: "VPBank", logo: "https://i.postimg.cc/SK8GsK83/VPBank-NEO.png" },
  { id: "VRB", name: "VRB", logo: "https://api.vietqr.io/img/VRB.png" },
  { id: "WOORIBANK", name: "Woori Bank", logo: "https://i.postimg.cc/h40pThwq/Woori-WON-Vietnam.png" },
  { id: "MSB", name: "TNEX", logo: "https://i.postimg.cc/s20rrq5m/TNEX-Ng-n-h-ng-s-th-h-m-i.png" },
  { id: "TIMO", name: "Timo", logo: "https://i.postimg.cc/9ffhsCwz/IMG-4708.png" },
  { id: "TCB", name: "Techcombank", logo: "https://api.vietqr.io/img/TCB.png" }
];

let selectedBank = null;
let qrUrl = '';

function createCustomSelect(items, containerId, type) {
  // [Hàm createCustomSelect giữ nguyên]
}

try {
  createCustomSelect(banks, 'bankSelect', 'bank');
} catch (error) {
  console.error('Lỗi khởi tạo dropdown:', error);
}

// Hàm xử lý form với tùy chỉnh màu sắc
document.getElementById('qrForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const accountName = document.getElementById('accountName').value;
  const accountNo = document.getElementById('accountNo').value.trim();
  const amountInput = document.getElementById('amount').value;
  const description = document.getElementById('description').value;
  const qrColor = document.getElementById('qrColor').value || '000000'; // Mặc định màu đen nếu không chọn

  const qrCodeDiv = document.getElementById('qrCode');

  if (!selectedBank) {
    showToast("Vui lòng chọn ngân hàng!");
    return;
  }

  if (!accountNo) {
    showToast("Vui lòng nhập số tài khoản!");
    return;
  }

  if (!accountName) {
    showToast("Vui lòng nhập tên người nhận!");
    return;
  }

  let amount = amountInput ? amountInput.replace(/[,.]/g, '') : '0';
  amount = amount.replace(/[^0-9]/g, '');
  amount = parseInt(amount || '0', 10);

  qrUrl = `https://img.vietqr.io/image/${selectedBank.id}-${accountNo}-print.png?amount=${amount}&addInfo=${encodeURIComponent(description)}&accountName=${encodeURIComponent(accountName)}&color=${qrColor}`;

  const img = new Image();
  img.src = qrUrl;
  img.onload = () => {
    qrCodeDiv.innerHTML = `<img src="${qrUrl}" alt="QR Code">`;
    document.getElementById("qrActions").style.display = "flex";
  };
  img.onerror = () => {
    showToast("Lỗi tạo mã QR! Vui lòng kiểm tra số tài khoản và thử lại.");
    qrCodeDiv.innerHTML = '';
    document.getElementById("qrActions").style.display = "none";
  };
});

// Thêm theo dõi thay đổi thời gian thực cho mã QR động
['accountName', 'accountNo', 'amount', 'description'].forEach(id => {
  document.getElementById(id).addEventListener('input', updateQRRealTime);
});

function updateQRRealTime() {
  if (!selectedBank) return;

  const accountName = document.getElementById('accountName').value;
  const accountNo = document.getElementById('accountNo').value.trim();
  const amountInput = document.getElementById('amount').value;
  const description = document.getElementById('description').value;
  const qrColor = document.getElementById('qrColor').value || '000000';

  if (accountNo && accountName) {
    let amount = amountInput ? amountInput.replace(/[,.]/g, '') : '0';
    amount = amount.replace(/[^0-9]/g, '');
    amount = parseInt(amount || '0', 10);

    const newQrUrl = `https://img.vietqr.io/image/${selectedBank.id}-${accountNo}-print.png?amount=${amount}&addInfo=${encodeURIComponent(description)}&accountName=${encodeURIComponent(accountName)}&color=${qrColor}`;
    
    const qrCodeDiv = document.getElementById('qrCode');
    const img = new Image();
    img.src = newQrUrl;
    img.onload = () => {
      qrCodeDiv.innerHTML = `<img src="${newQrUrl}" alt="QR Code">`;
      document.getElementById("qrActions").style.display = "flex";
      qrUrl = newQrUrl;
    };
    img.onerror = () => {
      qrCodeDiv.innerHTML = '';
      document.getElementById("qrActions").style.display = "none";
    };
  }
}

// Định dạng số tiền giữ nguyên
document.getElementById('amount').addEventListener('input', function(e) {
  let value = e.target.value.replace(/[^0-9,.]/g, '');
  if (value) {
    value = value.replace(/[,.]/g, '');
    value = parseInt(value, 10).toLocaleString('vi-VN');
  }
  e.target.value = value;
  updateQRRealTime(); // Cập nhật QR khi thay đổi số tiền
});

// Các hàm tải xuống và sao chép giữ nguyên
function downloadImage(url) {
  // [Hàm downloadImage giữ nguyên]
}

document.getElementById('downloadBtn').onclick = () => {
  if (qrUrl) {
    downloadImage(qrUrl);
  }
};

document.getElementById('copyBtn').onclick = () => {
  if (qrUrl) {
    navigator.clipboard.writeText(qrUrl)
      .then(() => showToast("Đã sao chép liên kết QR!"))
      .catch(err => showToast("Lỗi sao chép!"));
  }
};

function showToast(message, duration = 4000) {
  // [Hàm showToast giữ nguyên]
}

window.onload = function () {
  showToast("Chào mừng bạn đến với trang tạo mã QR thanh toán!");
};
