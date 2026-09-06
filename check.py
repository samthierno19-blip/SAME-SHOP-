from playwright.sync_api import sync_playwright
p='/tmp/testshop/index.html'
with sync_playwright() as pw:
 b=pw.chromium.launch(headless=True)
 page=b.new_page()
 errs=[]
 page.on('console', lambda m: errs.append('console '+m.type+': '+m.text))
 page.on('pageerror', lambda e: errs.append('pageerror: '+str(e)))
 page.goto('file://'+p, wait_until='load')
 page.wait_for_timeout(1000)
 print('cards',page.locator('.product').count())
 print('count text',page.locator('#productCount').inner_text())
 print('last',page.locator('.product').last.locator('h3').inner_text())
 print('errs',errs)
 b.close()
