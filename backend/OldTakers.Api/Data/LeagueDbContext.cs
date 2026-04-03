using Microsoft.EntityFrameworkCore;
using OldTakers.Api.Models;

namespace OldTakers.Api.Data;

public class LeagueDbContext : DbContext
{
    public LeagueDbContext(DbContextOptions<LeagueDbContext> options) : base(options) { }

    public DbSet<Season> Seasons => Set<Season>();
    public DbSet<Division> Divisions => Set<Division>();
    public DbSet<Team> Teams => Set<Team>();
    public DbSet<TeamManager> TeamManagers => Set<TeamManager>();
    public DbSet<Player> Players => Set<Player>();
    public DbSet<TeamRegistration> TeamRegistrations => Set<TeamRegistration>();
    public DbSet<PlayerRegistration> PlayerRegistrations => Set<PlayerRegistration>();
    public DbSet<TeamRosterEntry> TeamRosterEntries => Set<TeamRosterEntry>();
    public DbSet<Match> Matches => Set<Match>();
    public DbSet<Standing> Standings => Set<Standing>();
    public DbSet<Sponsor> Sponsors => Set<Sponsor>();
    public DbSet<NewsPost> NewsPosts => Set<NewsPost>();
    public DbSet<ContactMessage> ContactMessages => Set<ContactMessage>();
    public DbSet<WaiverAcceptance> WaiverAcceptances => Set<WaiverAcceptance>();
    public DbSet<PaymentRecord> PaymentRecords => Set<PaymentRecord>();
    public DbSet<LeagueRulesSection> LeagueRulesSections => Set<LeagueRulesSection>();
    public DbSet<AdminUser> AdminUsers => Set<AdminUser>();
    public DbSet<SiteContentSetting> SiteContentSettings => Set<SiteContentSetting>();
    public DbSet<LeagueSetting> LeagueSettings => Set<LeagueSetting>();
}
