const banks = [
  { id: "ABB", name: "ABBANK", logo: "https://i.postimg.cc/7hmLngvc/ABBANK.png", bin: "970425" },
  { id: "CAKE", name: "CAKE Bank", logo: "https://api.vietqr.io/img/CAKE.png", bin: "546034" },
  { id: "CIMB", name: "CIMB Bank", logo: "https://api.vietqr.io/img/CIMB.png", bin: "970458" },
  { id: "ACB", name: "ACB", logo: "https://api.vietqr.io/img/ACB.png", bin: "970416" },
  { id: "AGRIBANK", name: "Agribank", logo: "https://i.postimg.cc/B65btrmJ/Agribank-Plus.png", bin: "970405" },
  { id: "BACABANK", name: "Bac A Bank", logo: "https://i.postimg.cc/63xTWWLH/BAC-A-BANK-Mobile-Banking.png", bin: "970409" },
  { id: "BAOVIETBANK", name: "Bảo Việt Bank", logo: "https://i.postimg.cc/bwMs5HGf/IMG-4553.png", bin: "970438" },
  { id: "BIDV", name: "BIDV", logo: "https://api.vietqr.io/img/BIDV.png", bin: "970418" },
  { id: "EXIMBANK", name: "Eximbank", logo: "https://i.postimg.cc/fWjSb9PY/Eximbank-EDigi.png", bin: "970431" },
  { id: "HDB", name: "HDBank", logo: "https://i.postimg.cc/rpBRDCcN/HDBank.png", bin: "970437" },
  { id: "HLBANK", name: "Hong Leong Bank", logo: "https://i.postimg.cc/kgDmL08B/HLB-Connect-Vietnam.png", bin: "970442" },
  { id: "IBK", name: "IBK Bank", logo: "https://api.vietqr.io/img/IBK.png", bin: "970455" },
  { id: "INDOVINA", name: "Indovina Bank", logo: "https://i.postimg.cc/yY1Byg8h/IVB-Mobile-Banking.png", bin: "970434" },
  { id: "KIENLONGBANK", name: "KienlongBank", logo: "https://i.postimg.cc/FFgNSgNs/Kienlong-Bank-Plus.png", bin: "970452" },
  { id: "LPB", name: "LienVietPostBank", logo: "https://api.vietqr.io/image/LPB.png", bin: "970449" },
  { id: "MSB", name: "MSB", logo: "https://api.vietqr.io/image/MSB.png", bin: "970426" },
  { id: "MBBANK", name: "MB Bank", logo: "https://i.postimg.cc/zGPJBz5C/MB-Bank.png", bin: "970422" },
  { id: "NAMABANK", name: "Nam A Bank", logo: "https://i.postimg.cc/437XHDNr/NAM-A-BANK-OPEN-BANKING.png", bin: "970428" },
  { id: "NCB", name: "NCB", logo: "https://api.vietqr.io/image/NCB.png", bin: "970419" },
  { id: "OCB", name: "OCB", logo: "https://api.vietqr.io/image/OCB.png", bin: "970448" },
  { id: "OCEANBANK", name: "OceanBank", logo: "https://api.vietqr.io/image/OCEANBANK.png", bin: "970414" },
  { id: "PGBANK", name: "PG Bank", logo: "https://api.vietqr.io/image/PGB.png", bin: "970430" },
  { id: "PBVN", name: "Public Bank Vietnam", logo: "https://api.vietqr.io/image/PBVN.png", bin: "970439" },
  { id: "PVCOMBANK", name: "PVcomBank", logo: "https://api.vietqr.io/image/PVC.png", bin: "970412" },
  { id: "SACOMBANK", name: "Sacombank", logo: "https://api.vietqr.io/image/SACOMBANK.png", bin: "970403" },
  { id: "SAIGONBANK", name: "SaigonBank", logo: "https://i.postimg.cc/PJZLbLfn/SAIGONBANK-Smart-Banking.png", bin: "970400" },
  { id: "SCB", name: "SCB", logo: "https://api.vietqr.io/image/SCB.png", bin: "970429" },
  { id: "SEABANK", name: "SeABank", logo: "https://api.vietqr.io/image/SEA.png", bin: "970440" },
  { id: "SHB", name: "SHB", logo: "https://api.vietqr.io/image/SHB.png", bin: "970443" },
  { id: "SHBVNEO", name: "Shinhan Bank", logo: "https://api.vietqr.io/image/SHBVN.png", bin: "970424" },
  { id: "STANDARDCHARTERED", name: "Standard Chartered", logo: "https://api.vietqr.io/image/SC.png", bin: "970410" },
  { id: "TPB", name: "TPBank", logo: "https://api.vietqr.io/image/TPB.png", bin: "970423" },
  { id: "UNITEDOVERSEAS", name: "UOB", logo: "https://api.vietqr.io/image/UOB.png", bin: "970458" },
  { id: "VIB", name: "VIB", logo: "https://api.vietqr.io/image/VIB.png", bin: "970441" },
  { id: "VIETABANK", name: "VietABank", logo: "https://api.vietqr.io/image/VAB.png", bin: "970427" },
  { id: "VIETBANK", name: "VietBank", logo: "https://api.vietqr.io/image/VietBank.png", bin: "970433" },
  { id: "VIETCOMBANK", name: "Vietcombank", logo: "https://api.vietqr.io/image/VCB.png", bin: "970436" },
  { id: "VIETINBANK", name: "VietinBank", logo: "https://api.vietqr.io/image/VTB.png", bin: "970415" },
  {id: "VPBA", name: "VPBank", logo: "https://api.vietqr.io/image/VPB.png", bin: "970432" },
  { id: "VRB", name: "VRB", logo: "https://api.vietqr.io/image/VRB.png", bin: "970421" },
  { id: "WOORIBANK", name: "Woori Bank", logo: "https://api.vietqr.io/image/WB.png", bin: "970457" },
  { id: "TNEX", name: "TNEX BY MSB", logo: "https://api.vietqr.io/image/TNEX.png", bin: "msb" },
  { id: "TIMO", name: "Timo", logo: "https://api.vietqr.io/image/TIMO.png", bin: "Timo" },
  { id: "TCB", name: "Techcombank", logo: "https://api.vietqr.io/image/TCB.png", bin: "970407" },
];

let selectedBank = null;
let qrUrl = '';
let selectedQrSize = 'medium';
let selectedFormat = 'png';
let videoStream = null;

function createCustomSelect(items, containerId, type) {
  const select = document.getElementById(containerId);
  if (!select) {
    console.error(`Không tìm thấy container với ID: ${containerId}`);
    return;
  }

  const selected = select.querySelector('.select-selected');
  const optionsContainer = select.querySelector('.select-items');

  if (!selected || !optionsContainer) {
    console.error(`Không tìm thấy .select-selected hoặc .select-items trong ${containerId}`);
    return;
  }

  let isSearchMode = false;
  let originalContent = selected.innerHTML;
  let searchInput = null;

  function renderOptions(filteredItems) {
    optionsContainer.innerHTML = '';
    filteredItems.forEach(item => {
      const div = document.createElement('div');
      if (type === 'bank') {
        div.innerHTML = `<img src="${item.logo}" alt="${item.name}">${item.name}`;
        div.addEventListener('click', () => {
          selectedBank = item;
          originalContent = `<img src="${item.logo}" alt="${item.name}">${item.name}`;
          selected.innerHTML = originalContent;
          selected.classList.remove('search-mode');
          optionsContainer.classList.remove('show');
          isSearchMode = false;
          searchInput = null;
          updateQRCode();
        });
      } else {
        div.innerHTML = item.text;
        div.addEventListener('click', () => {
          if (type === 'size') {
            selectedQrSize = item.value;
          } else if (type === 'format') {
            selectedFormat = item.value;
          }
          originalContent = item.text;
          selected.innerHTML = originalContent;
          selected.classList.remove('search-mode');
          optionsContainer.classList.remove('show');
          isSearchMode = false;
          searchInput = null;
          updateQRCode();
        });
      }
      optionsContainer.appendChild(div);
    });
  }

  selected.onclick = () => {
    const isVisible = optionsContainer.classList.contains('show');
    document.querySelectorAll('.select-items').forEach(el => el.classList.remove('show'));

    if (!isVisible) {
      if (!isSearchMode && type === 'bank') {
        isSearchMode = true;
        selected.classList.add('search-mode');
        selected.innerHTML = '<input type="text" class="search-bank" placeholder="Tìm kiếm ngân hàng...">';
        searchInput = selected.querySelector('.search-bank');
        searchInput.focus();

        searchInput.addEventListener('input', () => {
          const searchTerm = searchInput.value.toLowerCase();
          const filteredItems = items.filter(item => item.name.toLowerCase().includes(searchTerm));
          renderOptions(filteredItems);
        });
      } else {
        optionsContainer.classList.add('show');
      }
    } else {
      if (isSearchMode) {
        selected.classList.remove('search-mode');
        selected.innerHTML = originalContent;
        isSearchMode = false;
        searchInput = null;
      }
      optionsContainer.classList.remove('show');
    }
  };

  window.addEventListener('click', (e) => {
    if (!select.contains(e.target)) {
      optionsContainer.classList.remove('show');
      if (isSearchMode) {
        selected.classList.remove('search-mode');
        selected.innerHTML = originalContent;
        isSearchMode = false;
        searchInput = null;
      }
    }
  });

  try {
    renderOptions(items);
  } catch (error) {
    console.error(`Lỗi khi render dropdown ${containerId}:`, error);
  }
}

try {
  createCustomSelect(banks, 'bankSelect', 'bank');
  createCustomSelect([
    { value: 'small', text: 'Kích thước QR: Nhỏ' },
    { value: 'medium', text: 'Kích thước QR: Vừa' },
    { value: 'large', text: 'Kích thước QR: Lớn' }
  ], 'qrSizeSelect', 'size');
  createCustomSelect([
    { value: 'png', text: 'Định dạng: PNG' },
    { value: 'svg', text: 'Định dạng: SVG' }
  ], 'qrFormatSelect', 'format');
} catch (error) {
  console.error('Lỗi khởi tạo dropdown:', error);
}

function updateQRCode() {
  const accountName = document.getElementById('accountName').value || 'Unknown';
  const accountNo = document.getElementById('accountNo').value.trim();
  const amountInput = document.getElementById('amount').value;
  const description = document.getElementById('description').value;
  const qrCodeDiv = document.getElementById('qrCode');
  const qrActionsDiv = document.getElementById('qrActions');
  const paymentPreview = document.getElementById('paymentPreview');

  let amount = amountInput ? amountInput.replace(/[,.]/g, '') : '';
  amount = amount.replace(/[^0-9]/g, '');
  amount = parseInt(amount || '0', 10);

  // Update payment preview
  paymentPreview.innerHTML = `
    <p><strong>Ngân hàng:</strong> ${selectedBank ? selectedBank.name : 'Chưa chọn'}</p>
    <p><strong>Tên người nhận:</strong> ${accountName !== 'Unknown' ? accountName : 'Không nhập'}</p>
    <p><strong>Số tài khoản:</strong> ${accountNo || 'Chưa nhập'}</p>
    <p><strong>Số tiền:</strong> ${amountInput ? amount.toLocaleString('vi-VN') + ' VNĐ' : '0 VNĐ'}</p>
    <p><strong>Nội dung:</strong> ${description || 'Chưa nhập'}</p>
    <p><strong>Kích thước QR:</strong> ${selectedQrSize === 'small' ? 'Nhỏ' : selectedQrSize === 'medium' ? 'Vừa' : 'Lớn'}</p>
    <p><strong>Định dạng:</strong> ${selectedFormat.toUpperCase()}</p>
  `;

  if (!selectedBank || !accountNo) {
    qrCodeDiv.innerHTML = '';
    qrActionsDiv.style.display = 'none';
    return;
  }

  // Adjust VietQR URL based on format
  const formatParam = selectedFormat === 'svg' ? 'svg' : 'print';
  qrUrl = `https://img.vietqr.io/image/${selectedBank.id}-${accountNo}-${formatParam}.png?amount=${amount}&addInfo=${encodeURIComponent(description)}&accountName=${encodeURIComponent(accountName)}`;

  const qrElement = selectedFormat === 'svg' ? document.createElementNS('http://www.w3.org/2000/svg', 'svg') : new Image();
  qrElement.src = qrUrl;
  qrElement.className = `qr-${selectedQrSize}`;
  qrElement.onload = () => {
    qrCodeDiv.innerHTML = '';
    qrCodeDiv.appendChild(qrElement);
    qrActionsDiv.style.display = 'flex';
    saveToHistory(selectedBank, accountName, accountNo, amount, description, qrUrl, selectedFormat);
  };
  qrElement.onerror = () => {
    showToast("Lỗi tạo mã QR! Vui lòng kiểm tra số tài khoản và thử lại.");
    qrCodeDiv.innerHTML = '';
    qrActionsDiv.style.display = 'none';
  };
}

// Format amount input
document.getElementById('amount').addEventListener('input', function(e) {
  let value = e.target.value.replace(/[^0-9,.]/g, '');
  if (value) {
    value = value.replace(/[,.]/g, '');
    value = parseInt(value, 10).toLocaleString('vi-VN');
  }
  e.target.value = value;
  updateQRCode();
});

// Update QR on input changes
document.getElementById('accountName').addEventListener('input', updateQRCode);
document.getElementById('accountNo').addEventListener('input', updateQRCode);
document.getElementById('description').addEventListener('input', updateQRCode);

function downloadImage(url, format) {
  if (url) {
    try {
      const link = document.createElement('a');
      link.href = url;
      link.download = `qr-code.${format}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      showToast(`Đã tải mã QR định dạng ${format.toUpperCase()} thành công!`);
    } catch (error) {
      showToast("Lỗi khi tải mã QR. Vui lòng thử lại!");
      console.error("Lỗi tải mã QR:", error);
    }
  } else {
    showToast("Không có mã QR để tải!");
  }
}

document.getElementById('downloadBtn').onclick = () => {
  if (qrUrl) {
    downloadImage(qrUrl, selectedFormat);
  }
};

document.getElementById('copyBtn').onclick = () => {
  if (qrUrl) {
    navigator.clipboard.writeText(qrUrl)
      .then(() => showToast("Đã sao chép liên kết QR!"))
      .catch(err => showToast("Lỗi sao chép!"));
  }
};

document.getElementById('shareEmailBtn').onclick = () => {
  if (qrUrl) {
    const accountName = document.getElementById('accountName').value || 'Unknown';
    const accountNo = document.getElementById('accountNo').value.trim();
    const amountInput = document.getElementById('amount').value;
    const description = document.getElementById('description').value;

    let amount = amountInput ? amountInput.replace(/[,.]/g, '') : '0';
    amount = parseInt(amount || '0', 10).toLocaleString('vi-VN');

    const subject = encodeURIComponent('Mã QR Thanh Toán');
    const body = encodeURIComponent(
      `Thông tin thanh toán:\n` +
      `Ngân hàng: ${selectedBank ? selectedBank.name : 'Không xác định'}\n` +
      `Tên người nhận: ${accountName !== 'Unknown' ? accountName : 'Không nhập'}\n` +
      `Số tài khoản: ${accountNo}\n` +
      `Số tiền: ${amount} VNĐ\n` +
      `Nội dung: ${description || 'Không có'}\n` +
      `Liên kết mã QR: ${qrUrl}`
    );
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
    showToast("Đã mở email để chia sẻ mã QR!");
  } else {
    showToast("Không có mã QR để chia sẻ!");
  }
};

document.getElementById('shareWhatsAppBtn').onclick = () => {
  if (qrUrl) {
    const accountName = document.getElementById('accountName').value || 'Unknown';
    const accountNo = document.getElementById('accountNo').value.trim();
    const amountInput = document.getElementById('amount').value;
    const description = document.getElementById('description').value;

    let amount = amountInput ? amountInput.replace(/[,.]/g, '') : '0';
    amount = parseInt(amount || '0', 10).toLocaleString('vi-VN');

    const text = encodeURIComponent(
      `Thông tin thanh toán:\n` +
      `Ngân hàng: ${selectedBank ? selectedBank.name : 'Không xác định'}\n` +
      `Tên người nhận: ${accountName !== 'Unknown' ? accountName : 'Không nhập'}\n` +
      `Số tài khoản: ${accountNo}\n` +
      `Số tiền: ${amount} VNĐ\n` +
      `Nội dung: ${description || 'Không có'}\n` +
      `Liên kết mã QR: ${qrUrl}`
    );
    window.open(`https://wa.me/?text=${text}`, '_blank');
    showToast("Đã mở WhatsApp để chia sẻ mã QR!");
  } else {
    showToast("Không có mã QR để chia sẻ!");
  }
};

document.getElementById('shareTelegramBtn').onclick = () => {
  if (qrUrl) {
    const accountName = document.getElementById('accountName').value || 'Unknown';
    const accountNo = document.getElementById('accountNo').value.trim();
    const amountInput = document.getElementById('amount').value;
    const description = document.getElementById('description').value;

    let amount = amountInput ? amountInput.replace(/[,.]/g, '') : '0';
    amount = parseInt(amount || '0', 10).toLocaleString('vi-VN');

    const text = encodeURIComponent(
      `Thông tin thanh toán:\n` +
      `Ngân hàng: ${selectedBank ? selectedBank.name : 'Không xác định'}\n` +
      `Tên người nhận: ${accountName !== 'Unknown' ? accountName : 'Không nhập'}\n` +
      `Số tài khoản: ${accountNo}\n` +
      `Số tiền: ${amount} VNĐ\n` +
      `Nội dung: ${description || 'Không có'}\n` +
      `Liên kết mã QR: ${qrUrl}`
    );
    window.open(`https://t.me/share/url?url=${text}`, '_blank');
    showToast("Đã mở Telegram để chia sẻ mã QR!");
  } else {
    showToast("Không có mã QR để chia sẻ!");
  }
};

function showToast(message, duration = 4000) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), duration);
}

function saveToHistory(bank, accountName, accountNo, amount, description, qrUrl, format) {
  const history = JSON.parse(localStorage.getItem('qrHistory') || '[]');
  history.unshift({
    bank: bank.name,
    bankLogo: bank.logo,
    accountName: accountName !== 'Unknown' ? accountName : 'Không nhập',
    accountNo,
    amount: amount.toLocaleString('vi-VN'),
    description,
    qrUrl,
    format,
    timestamp: new Date().toLocaleString('vi-VN')
  });
  localStorage.setItem('qrHistory', JSON.stringify(history.slice(0, 10)));
  renderHistory();
}

function renderHistory() {
  const historyList = document.getElementById('qrHistoryList');
  const history = JSON.parse(localStorage.getItem('qrHistory') || '[]');
  historyList.innerHTML = '';
  history.forEach(item => {
    const div = document.createElement('div');
    div.className = 'history-item';
    div.innerHTML = `
      <img src="${item.bankLogo}" alt="${item.bank}">
      <div>
        <p><strong>${item.bank}</strong> - ${item.accountName}</p>
        <p>${item.accountNo} | ${item.amount} VNĐ | ${item.timestamp}</p>
      </div>
    `;
    div.onclick = () => {
      qrUrl = item.qrUrl;
      selectedFormat = item.format;
      document.getElementById('qrCode').innerHTML = `<${item.format === 'svg' ? 'svg' : 'img'} src="${qrUrl}" alt="QR Code" class="qr-${selectedQrSize}">`;
      document.getElementById('qrActions').style.display = 'flex';
      showToast("Đã tải mã QR từ lịch sử!");
    };
    historyList.appendChild(div);
  });
}

function saveTemplate() {
  const accountName = document.getElementById('accountName').value || 'Unknown';
  const accountNo = document.getElementById('accountNo').value.trim();
  if (!selectedBank || !accountNo) {
    showToast("Vui lòng chọn ngân hàng và nhập số tài khoản để lưu mẫu!");
    return;
  }
  const templates = JSON.parse(localStorage.getItem('qrTemplates') || '[]');
  templates.unshift({
    bank: selectedBank,
    accountName,
    accountNo
  });
  localStorage.setItem('qrTemplates', JSON.stringify(templates.slice(0, 10)));
  renderTemplates();
  showToast("Đã lưu mẫu thanh toán!");
}

function renderTemplates() {
  const templateList = document.getElementById('templateList');
  const templates = JSON.parse(localStorage.getItem('qrTemplates') || '[]');
  templateList.innerHTML = '';
  templates.forEach(item => {
    const div = document.createElement('div');
    div.className = 'template-item';
    div.innerHTML = `
      <img src="${item.bank.logo}" alt="${item.bank.name}">
      <div>
        <div>p><strong>${item.bank.name}</strong> - ${item.accountName}</p>
        <p>${item.accountNo}</p>
      </div>
    `;
    div.onclick = () => {
      selectedBank = item.bank;
      document.getElementById('bankSelect').querySelector('.select-selected').innerHTML = `<img src="${item.bank.logo}" alt="${item.bank.name}">${item.bank.name}`;
      document.getElementById('accountName').value = item.accountName !== 'Unknown' ? item.accountName : '';
      document.getElementById('accountNo').value = item.accountNo;
      updateQRCode();
      showToast("Đã tải mẫu thanh toán!");
    };
    templateList.appendChild(div);
  });
}

function clearHistory() {
  localStorage.removeItem('qrHistory');
  renderHistory();
  showToast("Đã xóa lịch sử mã QR!");
}

function clearTemplates() {
  localStorage.removeItem('qrTemplates');
  renderTemplates();
  showToast("Đã xóa tất cả mẫu thanh toán!");
}

// QR Scanning Logic
function startQRScanner() {
  const video = document.getElementById('qrVideo');
  const canvas = document.getElementById('qrCanvas');
  const canvasContext = canvas.getContext('2d');
  const modal = document.getElementById('qrScanModal');

  navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
    .then(stream => {
      videoStream = stream;
      video.srcObject = stream;
      video.play();
      function scan() {
        if (!videoStream) return;
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        canvasContext.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageData = canvasContext.getImageData(0, 0, canvas.width, canvas.height);
        const code = jsQR(imageData.data, imageData.width, imageData.height);
        if (code) {
          processQRData(code.data);
          stopQRScanner();
          return;
        }
        requestAnimationFrame(scan);
      }
      scan();
    })
    .catch(error => {
      showToast("Không thể truy cập camera! Vui lòng kiểm tra quyền truy cập.");
      console.error("QR Scanner Error:", error);
      stopQRScanner();
    });
}

function stopQRScanner() {
  if (videoStream) {
    videoStream.getTracks().forEach(track => track.stop());
    videoStream = null;
  }
  document.getElementById('qrVideo').srcObject = null;
  document.getElementById('qrScanModal').style.display = 'none';
}

function processQRData(data) {
  try {
    // VietQR format: 38-character ID or URL
    let qrInfo = {};
    if (data.startsWith('http')) {
      // Parse URL (e.g., https://img.vietqr.io/image/BIDV-1234567890-print.png?amount=1000000&addInfo=Test&accountName=NGUYEN+VAN+A)
      const urlParams = new URL(data).searchParams;
      qrInfo = {
        bankId: data.match(/image\/([A-Za-z]+)-/)?.[1],
        accountNo: data.match(/image\/[A-Za-z]+-([0-9]+)/)?.[1],
        amount: urlParams.get('amount'),
        description: urlParams.get('addInfo'),
        accountName: urlParams.get('accountName')
      };
    } else if (data.match(/^\d{38}/)) {
      // Parse VietQR ID (simplified parsing for example)
      const bankBin = data.substr(8, 6); // BIN at position 8-13
      const accountNo = data.substr(14, 10); // Account number (example length)
      const amount = '';
      const description = '';
      qrInfo = { bankId: banks.find(b => b.bin === bankBin)?.id, accountNo, amount, description };
    }

    if (qrInfo.bankId && qrInfo.accountNo) {
      const bank = banks.find(b => b.id === qrInfo.bankId);
      if (bank) {
        selectedBank = bank;
        document.getElementById('bankSelect').querySelector('.select-selected').innerHTML = `<img src="${bank.logo}" alt="${bank.name}">${bank.name}`;
        document.getElementById('accountNo').value = qrInfo.accountName || '';
        document.getElementById('accountNo').value = qrInfo.accountNo;
        document.getElementById('amount').value = qrInfo.amount ? parseInt(qrInfo.amount).toLocaleString('vi-VN') : '';
        document.getElementById('description').value = qrInfo.description || '';
        updateQRCode();
        showToast("Đã điền thông tin từ mã QR!");
      } else {
        showToast("Ngân hàng không được hỗ trợ!");
      }
    } else {
      showToast("Mã QR không hợp lệ hoặc thiếu thông tin!");
    }
  } catch (error) {
    showToast("Lỗi phân tích mã QR! Vui lòng thử lại.");
    console.error("QR Parse Error:", error);
  }
}

document.getElementById('qrForm').addEventListener('submit', function(e) {
  e.preventDefault();
  updateQRCode();
});

document.getElementById('saveTemplateBtn').onclick = saveTemplate;

document.getElementById('scanQrBtn').onclick = () => {
  document.getElementById('qrScanModal').style.display = 'block';
  startQRScanner();
};

document.getElementById('closeModalBtn').onclick = stopQRScanner;
document.getElementById('stopScanBtn').onclick = stopQRScanner;

window.onload = function() {
  showToast("Chào mừng bạn đến với trang tạo mã QR thanh toán!");
  renderHistory();
  renderTemplates();

  const historySection = document.getElementById('qrHistory');
  const clearHistoryBtn = document.createElement('button');
  clearHistoryBtn.textContent = 'Xóa lịch sử';
  clearHistoryBtn.style.marginTop = '10px';
  clearHistoryBtn.onclick = clearHistory;
  historySection.appendChild(clearHistoryBtn);

  const templateSection = document.getElementById('templates');
  const clearTemplateBtn = document.createElement('button');
  clearTemplateBtn.textContent = 'Xóa mẫu';
  clearTemplateBtn.style.marginTop = '10px';
  clearTemplateBtn.onclick = clearTemplates;
  templateSection.appendChild(clearTemplateBtn);
};