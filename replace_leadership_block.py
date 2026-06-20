from pathlib import Path
path = Path(r'c:\Users\mdabd\Desktop\SSSf_group\index.html')
text = path.read_text(encoding='utf-8')
start_marker = '<div class="team-grid">'
lead_marker = '<!-- ===== LEADERSHIP TEAM ===== -->'
block_start = text.find(start_marker, text.find(lead_marker))
if block_start == -1:
    raise SystemExit('Start marker not found')
end_marker = '</section>\n\n    <!-- ===== TESTIMONIALS ===== -->'
block_end = text.find(end_marker, block_start)
if block_end == -1:
    raise SystemExit('End marker not found')
block_end += len(end_marker)
replacement = '''            <div class="team-grid team-grid-compact">
                <div class="leader-tile" data-animate="fade-up" data-delay="100">
                    <div class="leader-tile-photo">
                        <img src="images/ceo.jpg" alt="Mr. S. Sahil Raza — Founder & CEO, SSSf Group">
                    </div>
                    <div class="leader-tile-info">
                        <p class="leader-tile-name">Mr. Sahil Raza</p>
                        <p class="leader-tile-role">Founder & CEO · SSSf Group</p>
                    </div>
                </div>
                <div class="leader-tile" data-animate="fade-up" data-delay="200">
                    <div class="leader-tile-photo">
                        <img src="images/manager.jpg" alt="Mr. S. Farhan — Operations Manager, SSSf Group">
                    </div>
                    <div class="leader-tile-info">
                        <p class="leader-tile-name">Mr. Shahzad Raza</p>
                        <p class="leader-tile-role">Operations Manager · SSSf Group</p>
                    </div>
                </div>
                <div class="leader-tile" data-animate="fade-up" data-delay="300">
                    <div class="leader-tile-photo">
                        <img src="images/ceo1.jpg" alt="Ms. Zaineb Khan — Head of Projects, SSSf Group">
                    </div>
                    <div class="leader-tile-info">
                        <p class="leader-tile-name">Ms. Zaineb Khan</p>
                        <p class="leader-tile-role">Head of Projects · SSSf Group</p>
                    </div>
                </div>
                <div class="leader-tile" data-animate="fade-up" data-delay="400">
                    <div class="leader-tile-photo">
                        <img src="images/manager2.jpg" alt="Mr. Bilal Shah — Business Head, SSSf Group">
                    </div>
                    <div class="leader-tile-info">
                        <p class="leader-tile-name">Mr. Bilal Shah</p>
                        <p class="leader-tile-role">Business Head · SSSf Group</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ===== TESTIMONIALS ===== -->'''
new_text = text[:block_start] + replacement + text[block_end:]
path.write_text(new_text, encoding='utf-8')
print('Replacement successful')
