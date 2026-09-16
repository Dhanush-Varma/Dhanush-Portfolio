import fitz, glob, os
out='.agents/outputs/cert_pages'
for pdf in glob.glob('attached_assets/*Job_Simulation*.pdf'):
    doc=fitz.open(pdf)
    print('\nFILE', os.path.basename(pdf), 'PAGES', doc.page_count)
    for i,page in enumerate(doc):
        pix=page.get_pixmap(matrix=fitz.Matrix(1.5,1.5), alpha=False)
        path=f"{out}/{os.path.splitext(os.path.basename(pdf))[0]}-{i+1}.png"; pix.save(path)
        text=' '.join(page.get_text().split())
        print('PAGE', i+1, text[:1200])
