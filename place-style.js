window.addEventListener('DOMContentLoaded', () => {
    const areas = document.querySelectorAll('area');

    areas.forEach(area => {
        area.addEventListener('mouseenter', () => {
            if (area.alt.includes('Coron')) {
                writeText('Coron, known for crystal-clear lagoons and limestone cliffs.');
            } else if (area.alt.includes('Athens')) {
                writeText('Athens, the capital of Greece.');
            } else if (area.alt.includes('Italy')) {
                writeText('Italy, Rome, home of the Colosseum.');
            } else if (area.alt.includes('Germany')) {
                writeText('Germany, Munich.');
            } else if (area.alt.includes('Batanes')) {
                writeText('Batanes, Cagayan Valley, famous for rolling hills.');
            }
        });

        area.addEventListener('mouseleave', () => {
            dissolveText('');
        });
    });
});