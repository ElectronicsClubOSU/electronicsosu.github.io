const OFFICER_TEMPLATE = `<div class="card">
    <div class="single-team">
    <div class="team-img">
        <img
        src="{2}"
        alt=""
        class="img-responsive"
        />
    </div>
    <div class="team-content">
        <div class="team-info">
        <h3>{0}</h3>
        <p>{1}</p>
        </div>
        <div class="scrollable-paragraph">
            <p class="team-text">
            {3}
            </p>
        </div>
    </div>
    </div>
</div>`

function format(str, ...values) {
  return str.replace(/{(\d+)}/g, function(match, index) {
    return typeof values[index] !== 'undefined' ? values[index] : match;
  });
}

function createCard(name, position, image, bio) {
    return format(OFFICER_TEMPLATE, name, position, image, bio)
}

async function load_officers(officer_div) {
    await fetch("assets/json/officers.json")
    .then(res => res.json())
    .then((res) => {
        try {
            let new_content = ""
            for (const officer of res) {
                let card = createCard(officer.name, officer.position, officer.image, officer.bio)
                officer_div.innerHTML += card
                new_content += card
            }
            officer_div.innerHTML = new_content
        } catch {
            officer_div.innerHTML = "<p>Failed to fetch officer information.</p>"
        }
    })
    .catch((err) => {
        officer_div.innerHTML = "<p>Failed to fetch officer information.</p>"
    })
}