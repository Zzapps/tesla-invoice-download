const invoices = [].map.call(document.getElementsByClassName("tds-link--primary"), (a) => a.href)

window.createFakeLink = (link) => {
    var a = document.createElement('a');
    a.href = link;
    a.target = '_parent';
    if ('download' in a) {
        a.download = link
    }
    return a
}

const  invoiceDownload = (links) => {
  
    const download = (i) => {
      
      if (i >= links.length) {
        return;
      }
      console.log(i, links[i]);
      const a = window.createFakeLink(links[i]);
      
      const body = (document.body || document.documentElement)
      body.appendChild(a);
      a.click(); 
      a.parentNode.removeChild(a);

      setTimeout(() => {
        download(++i);
      }, 500);
    }
    download(0);
  }

  invoiceDownload(invoices);