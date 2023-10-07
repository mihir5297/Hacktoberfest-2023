namespace CodePulse.API.Models.Domain
{
    public class BlogPost
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string TShortDescriptionitle { get; set; }
        public string Content { get; set; }
        public string UrlHandle { get; set; }
        public string FeaturedImageUrl { get; set; }
        public DateTime DateCreate { get; set; }
        public string Author { get; set; }
        public bool IsVisible { get; set; }
    }
}
