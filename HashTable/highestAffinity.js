/**
 * Created by malavallim on 6/18/16.
 */

const Hash = require('./Utils/hash');

const highestAffinity = (users, sites) => {
  var affinity = 0;
  var pagePair = [ '', '' ];
  var hash = new Hash();

  sites.keys().forEach(site => {
    var viewers = sites.get(site);
    viewers.forEach(userId => {
      var viewedSites = users.get(userId);
      viewedSites.forEach(site_ => {
        if (site !== site_) {
          var sitePairKey = hash.has(`${site}/${site_}`) ? `${site}/${site_}` : `${site_}/${site}`;
          if (!hash.has(sitePairKey)) {
            hash.set(sitePairKey, []);
          }
          if (0 > hash.get(sitePairKey).indexOf(userId)) {
            hash.get(sitePairKey).push(userId);
          }
          if (affinity < hash.get(sitePairKey).length) {
            affinity = hash.get(sitePairKey).length;
            pagePair[0] = site;
            pagePair[1] = site_;
          }
        }
      });
    });
  });

  console.log(hash);
  return [ pagePair[0], pagePair[1], affinity ];
};

const main = () => {
  var users = new Hash();
  var sites = new Hash();
  process.argv[2].split(':').forEach(line => {
    var pair = line.split(',');
    var page = pair[0];
    var userId = pair[1];

    if (!users.has(userId)) {
      users.set(userId, [ page ]);
    }
    else if (0 > users.get(userId).indexOf(page)) {
      users.get(userId).push(page);
    }

    if (!sites.has(page)) {
      sites.set(page, [ userId ]);
    }
    else if (0 > sites.get(page).indexOf(userId)) {
      sites.get(page).push(userId);
    }
  });

  console.log(users);
  console.log(sites);
  console.log(highestAffinity(users, sites));
};

main();